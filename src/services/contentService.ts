import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  query, 
  orderBy, 
  setDoc,
  onSnapshot
} from "firebase/firestore";
import { db, auth } from "../firebase";

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export const getContent = async (docId: string) => {
  const path = `content/${docId}`;
  try {
    const docRef = doc(db, "content", docId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
};

export const getPoliticalStories = async () => {
  const path = 'politicalStories';
  try {
    const q = query(collection(db, path), orderBy("order", "asc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
  }
};

export const getDailyLifeImages = async () => {
  const path = 'dailyLifeImages';
  try {
    const q = query(collection(db, path), orderBy("order", "asc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data().url);
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
  }
};

export const subscribeToContent = (docId: string, callback: (data: any) => void) => {
  const path = `content/${docId}`;
  return onSnapshot(doc(db, "content", docId), (doc) => {
    if (doc.exists()) {
      callback(doc.data());
    }
  }, (error) => {
    handleFirestoreError(error, OperationType.GET, path);
  });
};

export const subscribeToPoliticalStories = (callback: (data: any[]) => void) => {
  const path = 'politicalStories';
  const q = query(collection(db, path), orderBy("order", "asc"));
  return onSnapshot(q, (snapshot) => {
    callback(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  }, (error) => {
    handleFirestoreError(error, OperationType.LIST, path);
  });
};

export const subscribeToDailyLifeImages = (callback: (data: string[]) => void) => {
  const path = 'dailyLifeImages';
  const q = query(collection(db, path), orderBy("order", "asc"));
  return onSnapshot(q, (snapshot) => {
    callback(snapshot.docs.map(doc => doc.data().url));
  }, (error) => {
    handleFirestoreError(error, OperationType.LIST, path);
  });
};

// Initial data population
export const populateInitialData = async () => {
  try {
    // Hero
    await setDoc(doc(db, "content", "hero"), {
      profileImage: "https://i.postimg.cc/wvNNGGx4/IMG-20260226-215241-496.jpg",
      name: "মুহাম্মদ সাদরিল"
    });

    // Personal
    await setDoc(doc(db, "content", "personal"), {
      mainImage: "https://i.postimg.cc/wMYQ9sWz/IMG-20260226-232920-880.jpg",
      secondImage: "https://i.postimg.cc/wxb94cbn/FB-IMG-1772132582613.jpg",
      thirdImage: "https://i.postimg.cc/ZnQdCbZc/FB-IMG-1772133179353.jpg",
      introText: "রাজনীতির বাইরে আমি একজন সাধারন মানুষ আমার পরিবারে বাবা আমি এবং আমরা দুই ভাই আমার ছোট ভাইয়ের নাম জুলফিকার",
      motherText: "মা অনেকদিন আগেই আমাদেরকে ছেড়ে দুনিয়ার মায়া ত্যাগ করেছেন আপনারা দোয়া করবেন আমার মার জন্য আমিন"
    });

    // Initiatives
    await setDoc(doc(db, "content", "initiatives"), {
      text: "আমি নিজে দুইটা প্রতিষ্ঠানের মালিক মেরিগোল্ড ফ্লাওয়ার এন্ড ইভেন ম্যানেজমেন্ট আরেকটা হচ্ছে যে নিমন্ত্রণ রেস্টুরেন্ট এন্ড পার্টি সেন্টার শেয়ার হোল্ডার",
      image1: "https://i.postimg.cc/BnrR2HNr/FB-IMG-1772133718634.jpg",
      image2: "https://i.postimg.cc/9FM32WrK/FB-IMG-1772133687039.jpg"
    });

    // Social
    await setDoc(doc(db, "content", "social"), {
      screenshotUrl: "https://i.postimg.cc/kGXbgXv6/IMG-20260404-134658-295.jpg"
    });

    // Contact
    await setDoc(doc(db, "content", "contact"), {
      email: "contact@sadril.com",
      phone: "+8801306871054",
      address: "শরীয়তপুর সখিপুর বালার বাজার"
    });

    // Political Stories
    const stories = [
      {
        text: "আমি সেই ছাত্র জীবন থেকেই ছাত্রদলের সাথে আছি এবং থাকবো আমি বিগত ২০১১-১২ সাল থেকেই বা তারও আগে থেকেই রাজনৈতিক করি ছাত্রদলের পক্ষে আমি অনেকগুলো আন্দোলন এবং অনেকগুলো সমাবেশে ছিলাম যেভাবে ২০২৪ সালের আন্দোলনেও আমি ছিলাম এখন পর্যন্ত দলের খারাপ সময়ও আমি দলের পাশেই ছিলাম যেভাবে ছিল আমার বাবা আর আমি।",
        img: "https://i.postimg.cc/bwmrCFcY/FB-IMG-1772106974294.jpg",
        order: 1
      },
      {
        text: "আমার বাবা অনেক আগে থেকেই রাজনীতি করে এবং আমার পরিবারের সকলেই রাজনীতিবিদ বিশেষ করে আমার দাদু চারবারের চেয়ারম্যান জনাব রফিকুল ইসলাম বালা ছোটবেলা থেকেই বাবা চাচাদের সাথে দাদুদের সাথে থেকে আমার রাজনীতির এত হাত ঘড়ি।",
        img: "https://i.postimg.cc/qBwKZY8j/IMG-20260404-141222-015.jpg",
        order: 2
      },
      {
        text: "আমার বিশেষ করে আমার ছোট দাদু জনাব মোস্তাক আহমেদ মাসুম বালা এবং আমার চাচু মাইদুল ইউসুফ জিসানওয়ালা তাদের দুজনের থেকেই আমার এই রাজনীতির জীবন শুরু হয়েছিল এবং এখনো চলমান।",
        img: "https://i.postimg.cc/76fLssD5/IMG-20260227-000049-766.jpg",
        order: 3
      },
      {
        text: "বিশেষ করে আমার বাবা ছোটবেলা থেকেই দেখতাম তিনি রাজনীতি করেন এবং যুবদলের সাথে অনেকদিন ধরেই যুক্ত তার দেখাদেখি আমিও এই বিএনপির ছাত্রদলের যোগ দিলাম ২০১০ সাল থেকে তখন থেকেই আমার এই রাজনীতি জীবন শুরু এবং এখনো চলমান ভবিষ্যতেও চলবে দোয়া করবেন আপনারা সবাই ইনশাল্লাহ আপনাদের অনেক কিছু করার ইচ্ছা এবং স্বপ্ন আছে ইনশাল্লাহ একদিন সবকিছুই করব আপনাদের জন্য আসসালামু আলাইকুম।",
        img: "https://i.postimg.cc/sXY30tqJ/FB-IMG-1775291158929.jpg",
        order: 4
      }
    ];

    for (const story of stories) {
      await setDoc(doc(collection(db, "politicalStories")), story);
    }

    // Daily Life Images
    const dailyLifeImages = [
      "https://i.postimg.cc/jqX7HBJ8/FB-IMG-1772106834176.jpg",
      "https://i.postimg.cc/HLDnDtyJ/FB-IMG-1772106769900.jpg",
      "https://i.postimg.cc/BQjnjz5g/FB-IMG-1772107029036.jpg",
      "https://i.postimg.cc/wMdyDyLq/FB-IMG-1772106807815.jpg",
      "https://i.postimg.cc/FRmM11Cr/FB-IMG-1772106803092.jpg"
    ];

    for (let i = 0; i < dailyLifeImages.length; i++) {
      await setDoc(doc(collection(db, "dailyLifeImages")), {
        url: dailyLifeImages[i],
        order: i + 1
      });
    }

    console.log("Initial data populated successfully!");
  } catch (error) {
    console.error("Error populating initial data:", error);
  }
};
