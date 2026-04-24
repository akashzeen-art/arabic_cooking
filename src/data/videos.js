/** Category slug keys align with `CATEGORY_GRID` ids in config. */

export const CATEGORY_DETAILS = {
  sandwiches: {
    title: 'ساندويشات ولفائف',
    description: 'ساندويشات عربية شهية محشوة بأقوى النكهات.',
  },
  chicken: {
    title: 'أطباق الدجاج',
    description: 'دجاج مقرمش ومشوي وبالفرن — وصفات ستعشقها.',
  },
  meat: {
    title: 'لحم وكفتة',
    description: 'كفتة وكباب ولحم مفروم من قلب المطبخ العربي.',
  },
  pasta: {
    title: 'معكرونة وأرز',
    description: 'أطباق معكرونة وأرز مريحة بلمسة شرقية أصيلة.',
  },
  desserts: {
    title: 'حلويات ومخبوزات',
    description: 'حلويات شهية ومخبوزات بالتوابل العطرة.',
  },
}

export const ALL_CATEGORY_VIDEOS = [
  // Sandwiches
  {
    id: 'sw-1',
    title: 'ساندويش فيلادلفيا اللحم المفروم بالجبنة والبطاطس المقرمشة',
    category: 'sandwiches',
    thumbnail: '/thumbnails_new/ساندويش فيلادلفيا اللحم المفروم بالجبنة والبطاطس المقرمشة_ تاكل اصابعك وراه_720p.mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/58796cd6-ec0d-4878-a6c0-4d7520e3cd0d/play_480p.mp4',
    duration: '7:20',
    popular: true,
    quick: false,
    sortKey: 118,
  },
  {
    id: 'sw-2',
    title: 'أقوى ساندويش روست بيف — السرّ اللي ما بيكشفوه المطاعم!',
    category: 'sandwiches',
    thumbnail: '/thumbnails_new/أقوى ساندويش روست بيف السرّ اللي ما بيكشفوه المطاعم! _480p.mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/172d9678-831c-4db6-9a49-6a1f5fbec4eb/play_480p.mp4',
    duration: '8:10',
    popular: true,
    quick: false,
    sortKey: 115,
  },
  {
    id: 'sw-3',
    title: 'أقوى ساندويش فيلادلفيا بلمسة الشيف احمد — الطعم خيال!',
    category: 'sandwiches',
    thumbnail: '/thumbnails_new/أقوى ساندويش فيلادلفيا بلمسة الشيف احمد 👌 الطعم خيال! .mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/9f83ff9e-067c-4dbe-a22f-4bd7eda195de/play_360p.mp4',
    duration: '6:45',
    popular: true,
    quick: true,
    sortKey: 112,
  },
  {
    id: 'sw-4',
    title: 'هل هذا هو أرقى تاكوز فرنسي بالفطر والدجاج على اليوتيوب؟',
    category: 'sandwiches',
    thumbnail: '/thumbnails_new/هل هذا هو أرقى تاكوز فرنسي بالفطر والدجاج على اليوتيوب؟ _480p.mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/5638bff0-1bdd-464e-ae93-fa183f30f835/play_480p.mp4',
    duration: '9:30',
    popular: false,
    quick: false,
    sortKey: 108,
  },

  // Chicken
  {
    id: 'ch-1',
    title: 'جوانح الدجاج المقرمشة مع صلصة بافلو الحارة',
    category: 'chicken',
    thumbnail: '/thumbnails_new/جوانح الدجاج المقرمشة مع صلصة بافلو الحارة بمكونات بين يديك Spicy Buffalo Wings Recipe_720p.mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/eac7eb8e-0b8b-49e5-8752-caae158469ff/play_480p.mp4',
    duration: '10:15',
    popular: true,
    quick: false,
    sortKey: 120,
  },
  {
    id: 'ch-2',
    title: 'وصفة الدجاج اللي بتخلي البيت كله يشم ريحة الجوع!',
    category: 'chicken',
    thumbnail: '/thumbnails_new/وصفة الدجاج اللي بتخلي البيت كله يشم ريحة الجوع! 🤫🍗_480p.mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/28721276-509f-4e72-be88-1d530c14227d/play_480p.mp4',
    duration: '8:50',
    popular: true,
    quick: false,
    sortKey: 117,
  },
  {
    id: 'ch-3',
    title: 'دجاج البونلس الشهير — صار فيكم تعملوه بالبيت',
    category: 'chicken',
    thumbnail: '/thumbnails_new/دجاج البونلس الشهير صار فيكم تعملوه بالبيت Boneless Chicken.mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/3fd494ec-5836-4433-9071-51e762a83810/play_480p.mp4',
    duration: '7:40',
    popular: true,
    quick: true,
    sortKey: 114,
  },
  {
    id: 'ch-4',
    title: 'ما كنت أتوقع هالنتيجة! أصابع الدجاج المقلية بقرمشة خيالية',
    category: 'chicken',
    thumbnail: '/thumbnails_new/ما كنت أتوقع هالنتيجة! 😱🔥 أصابع الدجاج المقلية بقرمشة خيالية والبطاطا السرية! ..mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/689bcb30-d1fa-42f5-a3dd-6c33285bfe98/play_360p.mp4',
    duration: '9:05',
    popular: false,
    quick: false,
    sortKey: 110,
  },
  {
    id: 'ch-5',
    title: 'هيك بتطلع صينية الدجاج بالفرن مظبوطة — التتبيلة اللي الكل بيدوّر عليها',
    category: 'chicken',
    thumbnail: '/thumbnails_new/هيك بتطلع صينية الدجاج بالفرن مظبوطة _ التتبيلة اللي الكل بيدوّر عليها_480p.mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/661e9421-b288-42b6-b5d5-2b1201f22fb9/play_480p.mp4',
    duration: '11:20',
    popular: true,
    quick: false,
    sortKey: 116,
  },

  // Meat & Kofta
  {
    id: 'mt-1',
    title: 'كفتة ناعمة بصوص الطحينة — بس السر مش بالكفتة!',
    category: 'meat',
    thumbnail: '/thumbnails_new/كفتة ناعمة بصوص الطحينة… بس السر مش بالكفتة! 😯🔥 _480p.mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/a1256ca7-ff28-411b-aaf0-47ec07b19e52/play_480p.mp4',
    duration: '9:15',
    popular: true,
    quick: false,
    sortKey: 119,
  },
  {
    id: 'mt-2',
    title: 'هالصينية بتختصر كل شي طيب! جربتوا الكباب بهالطريقة؟',
    category: 'meat',
    thumbnail: '/thumbnails_new/هالصينية بتختصر كل شي طيب! جربتوا الكباب بهالطريقة؟ _480p.mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/05d3b727-78bc-4d28-828c-f6b67e50dfce/play_480p.mp4',
    duration: '10:40',
    popular: true,
    quick: false,
    sortKey: 116,
  },
  {
    id: 'mt-3',
    title: 'شوفوا كيف قلبت اللحم المفروم لطبق خمس نجوم!',
    category: 'meat',
    thumbnail: '/thumbnails_new/شوفوا كيف قلبت اللحم المفروم لطبق خمس نجوم!  🌟_480p.mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/73604e7b-6075-47b9-b3c3-38e5e98c10c3/play_480p.mp4',
    duration: '8:30',
    popular: false,
    quick: true,
    sortKey: 113,
  },
  {
    id: 'mt-4',
    title: 'طريقتي لأطيب كفتة مع بطاطس وخضار بالفرن — خلطة الكفتة اللبنانية',
    category: 'meat',
    thumbnail: '/thumbnails_new/طريقتي رح تخليكم تعملوا اطيب والذ كفتة مع بطاطس وخضار بالفرن  خلطة الكفتة اللبنانية مثل الجزارين.mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/8ff1267a-6a1b-47c6-891d-452b6014b8db/play_360p.mp4',
    duration: '12:00',
    popular: true,
    quick: false,
    sortKey: 111,
  },
  {
    id: 'mt-5',
    title: 'كفتة وبطاطا بالصينية',
    category: 'meat',
    thumbnail: '/thumbnails_new/كفتة وبطاطا بالصينية - Kofta and Potato Oven Recipe.mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/6daf96a8-0a60-4e3f-bd90-5deefee186f1/play_360p.mp4',
    duration: '11:10',
    popular: false,
    quick: false,
    sortKey: 109,
  },

  // Pasta & Rice
  {
    id: 'pr-1',
    title: 'فيتوتشيني ألفريدو — بس النكهة مش متل أي وصفة جربتوها قبل!',
    category: 'pasta',
    thumbnail: '/thumbnails_new/فيتوتشيني ألفريدو… بس النكهة مش متل أي وصفة جربتوها قبل! _480p.mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/68c4d02d-2d45-4f6e-b1e3-1bce22652baa/play_480p.mp4',
    duration: '7:55',
    popular: true,
    quick: true,
    sortKey: 118,
  },
  {
    id: 'pr-2',
    title: 'المكرونة اللي كل العيلة رح تطلبها كل يوم! بالخضار ومن قلب البيت',
    category: 'pasta',
    thumbnail: '/thumbnails_new/المكرونة اللي كل العيلة رح تطلبها كل يوم! بالخضار ومن قلب البيت 💕_480p.mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/2870c951-144e-4c32-a4bd-52990f84cc2e/play_480p.mp4',
    duration: '9:20',
    popular: true,
    quick: false,
    sortKey: 115,
  },
  {
    id: 'pr-3',
    title: 'مكرونة الحبش لأصحاب الذوق الصعب — نكهة فخمة ومختلفة بكل لقمة!',
    category: 'pasta',
    thumbnail: '/thumbnails_new/مكرونة الحبش لأصحاب الذوق الصعب 😋🔥 _ نكهة فخمة ومختلفة بكل لقمة!_480p.mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/a39725fd-ff14-41a2-9a8b-8aa527fe9cf4/play_480p.mp4',
    duration: '10:05',
    popular: false,
    quick: false,
    sortKey: 112,
  },
  {
    id: 'pr-4',
    title: 'المقلوبة اللي ما بتفشل — مقلوبة الارز بالفول',
    category: 'pasta',
    thumbnail: '/thumbnails_new/المقلوبة اللي ما بتفشل… إذا عملتها هيك، مستحيل ما تضبط! مقلوبة الارز بالفول_480p.mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/f8327b26-94ff-4b30-85b0-49f82fcccf9f/play_480p.mp4',
    duration: '13:30',
    popular: true,
    quick: false,
    sortKey: 110,
  },

  // Desserts & Bakes
  {
    id: 'ds-1',
    title: 'اليوم رح أعمل كيك بنكهة دافئة… والسر بالبهارات',
    category: 'desserts',
    thumbnail: '/thumbnails_new/بيتزا غير شكل! ثوم + عجينة قطنية وصفة ما بتننسى! _480p.mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/b847353d-9f79-4358-962b-cc55852d13b5/play_480p.mp4',
    popular: true,
    quick: false,
    sortKey: 117,
  },
  {
    id: 'ds-2',
    title: 'بيتزا غير شكل! ثوم + عجينة قطنية وصفة ما بتننسى!',
    category: 'desserts',
    thumbnail: '/thumbnails_new/بيتزا غير شكل! ثوم + عجينة قطنية وصفة ما بتننسى! _480p.mp4.png',
    videoUrl: 'https://vz-60dece12-bb8.b-cdn.net/49e65c2d-252f-4080-ad8e-04d6f91b5c9f/play_480p.mp4',
    duration: '14:00',
    popular: true,
    quick: false,
    sortKey: 114,
  },
]

export function getCategoryDetail(slug) {
  return CATEGORY_DETAILS[slug] ?? null
}

export function getVideosForCategory(slug) {
  return ALL_CATEGORY_VIDEOS.filter((v) => v.category === slug)
}

export function filterCategoryVideos(videos, filter) {
  let list = [...videos]
  if (filter === 'popular') list = list.filter((v) => v.popular)
  if (filter === 'quick') list = list.filter((v) => v.quick)
  if (filter === 'newest') list.sort((a, b) => b.sortKey - a.sortKey)
  if (filter === 'popular' || filter === 'quick') {
    list.sort((a, b) => b.sortKey - a.sortKey)
  }
  return list
}
