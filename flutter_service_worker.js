'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1754a57d8d94d9beead8bd501434e18b",
"assets/AssetManifest.bin.json": "fe18df003c83b5f2846974e997c3228c",
"assets/AssetManifest.json": "2ce31708e3e60762fec61708645e6f14",
"assets/assets/backgrounds/Celestial%2520Lavender%2520Background.webp": "63a1ad4d4725d674faf685faff34ba33",
"assets/assets/backgrounds/Gold%2520Dust%2520Background.webp": "91f9264642143db73661e17693fec23c",
"assets/assets/backgrounds/Lavender%2520and%2520Gold%2520Marble%2520Background.webp": "ab29c9169a044ecf74696baaf80f1cff",
"assets/assets/backgrounds/Lavender%2520Cloud%2520Wash%2520Background.webp": "e039db1bfa5ae51594b01d7ed39e6ed8",
"assets/assets/backgrounds/Lavender%2520Mist%2520Background.webp": "259f03380ea7697020e77702a4da2a36",
"assets/assets/backgrounds/Lavender%2520Watercolor%2520Wash%2520Background.webp": "e1f973e80783419e8647edd74c561741",
"assets/assets/backgrounds/Luminary%2520Signature%2520Background.webp": "0110b4fee422af3eaaf72a9d7b525de0",
"assets/assets/backgrounds/Moonlit%2520Ivory%2520Background.webp": "c568f2ed1a92fca574c70ae6b81672dc",
"assets/assets/backgrounds/Website%2520Background%25201.webp": "f7ae5365cd4fecdcb583d833bd402dc9",
"assets/assets/backgrounds/Website%2520Background%25202.webp": "f5e50594feb73e84dffdfb60fc03f844",
"assets/assets/brand_photos/Daily%2520Radiance%2520Collection%25201.webp": "67e7c7c6d1e8ea81a0eea8b260d9dfe0",
"assets/assets/brand_photos/Daily%2520Radiance%2520Collection%25202.webp": "31017cbed7970ade0b57d1181c95fccc",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Abundance%25201.webp": "22d800e8667b31645e3df24424441200",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Abundance%25202.webp": "2ab45a9c94b464a8544b05e165082656",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Abundance%25203.webp": "9bb4c5505709eaa19adad3421f259528",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Abundance%25204.webp": "4cd371415034b6f3a4de0caf5f0263b5",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Abundance%25205.webp": "0f79bf477069b530e0b191a6f1fbc85c",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Confidence%25202.webp": "d1126f22282ba30ff2a80fe757eea90d",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Confidence%25203.webp": "c18f0bed1f399adfdbb9f17f3e4e2f05",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Confidence%25204.webp": "91d69e73cfb04bfb0a39378a8da0d37b",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Confidence%25205.webp": "9eae25ce095df0528aa7fa61af9276be",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Confidence.webp": "30981e8d56b251f6b5e5c0de91bffd94",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Intuition%25202.webp": "48150f177d348efaf6aa19b09e033fcf",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Intuition%25203.webp": "5937fdd61237bb46459e7d2d58cbf582",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Intuition.webp": "f747554a2c0363ee6a4c944a660bbc44",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Intution%25203.webp": "d06d136cc8b92abc14ab2582336442d3",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Love%25202.webp": "417303432b5faf009452400f754c24fd",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Love%25203.webp": "9366c3d10186e09b62eb3c548bc0c391",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Love%25204.webp": "b8aabddc65bf3e5b6eed453a3475801f",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Love%25205.webp": "a1af2fc83dea08f5c437bd8451d17780",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Love%25206.webp": "835d843268d6ffc52d1a42e269413bce",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Love%25207.webp": "fc3405e5ac6da331be309433341d960a",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Love.webp": "0868376d7bd3f3b62c73ac4d9308b90a",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Peace%25201.webp": "489bf7c1af92cfff10c3fe6bce91f3a6",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Peace%25202.webp": "dfa55d1cee64d9a69aabe6ff5ba54cfb",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Peace%25203.webp": "ad273ed8e29141a1ad5f8dbcab11fa38",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Peace%25204.webp": "8b94b14a7b15e811056f859cb61b1d78",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Peace%25205.webp": "6ef6b1d7d099490427537c978310a9e4",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Peace%25206.webp": "824c9b78ca345b0b09436fac19d8f247",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Peace%25207.webp": "f255e058ae12885268da258f06ef9cd6",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Peace%25208.webp": "af9b759bc4222dd0d9beacb4d6da505c",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Peace%25209.webp": "0d2f29b6e2e044755fd9747e8eca2ec7",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Protection%25201.webp": "cb4674902f60843cc4d48c46b1b2e6f6",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Protection%25202.webp": "805905336ecab119bfbde638355b1ce7",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Protection%25203.webp": "c2fb1bdb8b8171e36e42128888d8a8b8",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Protection%25204.webp": "799034db1019388cc9c534bd03cfd8aa",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Protection%25205.webp": "78e8c1893f1796f94894fbb5e524a655",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Stability%25202.webp": "38be2dde387db3109f9a5864fe50d444",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Stability%25203.webp": "d3895f8ef3f8b507d71c7bf776a77e62",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Stability%25204.webp": "95980156fe87810035ccddf089af388d",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Stability%25205.webp": "3e42e03934b534d0701f6eeb1d03ce61",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Stability.webp": "a57324f0f2b90a13a50153b7bcdff073",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Strength%25202.webp": "1398db1957e8c2e1c9918e6725a2ae28",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Strength%25203.webp": "6765d2af4af9a252a284efe64da10f05",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Strength%25204.webp": "d57f459136f930834f0295d717e8e269",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Strength%25205.webp": "5edc40b2c598a5f30a79e77f61bd88bd",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Strength.webp": "663b75d87de96d11a9cc69e4dedf5404",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Truth%25202.webp": "96c2780677a2c3aa144c06a7d3cc4c47",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Truth%25203.webp": "6a539949b4b77cbd94b0db614063de8d",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Truth%25204.webp": "574f08c60dbea8f554103b415d7b1ca3",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Truth%25205.webp": "98c568a1049466df373194878df2645f",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Truth.webp": "ff66eb444a97bbb2da10701ccf7e50ae",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Vitality%25202.webp": "88cce5b9b7d2dc5d17921c664a925226",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Vitality%25203.webp": "5185f65fb3a02b5673a7e9853875bb80",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Vitality%25204.webp": "f18d8a9321f74a21ef4f6539e07c0c37",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Vitality%25205.webp": "19627eb19b08e5dfd101f354c05d0106",
"assets/assets/brand_photos/Daily%2520Radiance%2520of%2520Vitality.webp": "05b91328430c106e0b13f9c2ab3bfefd",
"assets/assets/brand_photos/Meet%2520the%2520Artist%2520Photo.webp": "4727d512c66364ef4e631a05d9a11c8f",
"assets/assets/brand_photos/Size%2520Guide.webp": "6b565b5c565a5ddac4891e289c37364c",
"assets/assets/logos/Asset%25201.png": "c0b0e04372bb870d85919d49e6ffad91",
"assets/assets/logos/Banner.webp": "d9b1a40656dc187c8d026e173e1cc44d",
"assets/assets/logos/Logo%2520(No%2520BG).png": "45f80f9817664c3cc7520e99fc3713a0",
"assets/assets/logos/Luminary%2520Lightwork%2520Text.webp": "952241f29ac5276db5e1a7dae45e5ba1",
"assets/assets/logos/Stamp%2520(No%2520BG).png": "d70508045be405c09cfc3e0f42a882f9",
"assets/assets/logos/Thinner%2520Banner.webp": "db46c6e476c3007d296629abeab919a2",
"assets/assets/logos/Website%2520Banner.webp": "e32f3209b5a411c9260743fcc2e946f7",
"assets/assets/placeholder_photos/Amethyst.webp": "a3a5db2d971d4bb7348afb30bfa651f2",
"assets/assets/placeholder_photos/AmethystHerb.webp": "7560428a2d57b4d4071357aa413868b1",
"assets/assets/placeholder_photos/Black,%2520Gold,%2520and%2520Purple.webp": "af60734f8f96a09a0c04dc727a7e71e4",
"assets/assets/placeholder_photos/CandleWithCrystals.webp": "e4b2d5fa9bb746fee6052953399ab4c9",
"assets/assets/placeholder_photos/CrystalCollection.webp": "5325aa7cee5986e541326a7a27275d7b",
"assets/assets/placeholder_photos/FlowerBracelet.webp": "b6bf597337c664bfe6f9e78ad523189f",
"assets/assets/placeholder_photos/FlowerCandle.webp": "fc847168984813ab2a9ecc0e63bdbcd0",
"assets/assets/placeholder_photos/IMG_1706.webp": "68b602db9a7418e62ec211f3af99720b",
"assets/assets/placeholder_photos/IMG_1708.CR3": "5b0460fbdfbc461bdaf1a1f1b2676659",
"assets/assets/placeholder_photos/IMG_1710.webp": "97ad4e1763102e10c9b542762d208ae9",
"assets/assets/placeholder_photos/IMG_1730.webp": "19517733681d6578763d986703880062",
"assets/assets/placeholder_photos/IMG_1732.webp": "84e8ae19139920787be69d8c5d4022e8",
"assets/assets/placeholder_photos/IMG_1734.webp": "c1b874f7005db04e7880854d1f46d468",
"assets/assets/placeholder_photos/IMG_1735.webp": "a976ee0ee8d7f4515abd17285ba24f91",
"assets/assets/placeholder_photos/IMG_1737.webp": "ab8f8e72821cb73b2510d29d57803ae2",
"assets/assets/placeholder_photos/IMG_1885.webp": "dc00e73fc030e1b636685ca98e16557f",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Amazon.png": "8d01cf6cab5be280931ac3c5a0fd3baf",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Bag.png": "462687fdb9b0f73b8ca20899df94a44e",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Behance.png": "c0e015b1d4534f370c9e72c2d2d582f2",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Cart.png": "74dd9393d1942a4b6753973f31cac33a",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Discord.png": "2099bb2fddb4f25c3052431597fcabca",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Email.png": "5b24f55e34573e1a5fb583b6c906380b",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Etsy.png": "c19cad584bd3eb8afffe457098318003",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Facebook.png": "f8e5fc1bac0351ac2289abd81b614ba9",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Google%2520Plus.png": "46f49e8e738b793bd9fe6b77691cd196",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Heart.png": "862a19645b4d9aa4663c1f2494ee55e3",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Instagram.png": "29f4c09ad5321cd2280dd72a01a0d4ba",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Like.png": "6a33bf01d9c2e688b5f3cc23b619e522",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Linkedin.png": "62575cc69a8553062955cba36fb901dc",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Location.png": "2536952c227da7004be5f0b8bcce8048",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Phone.png": "1202f9adec48f96f3a0773b6605a2f88",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Pinterest.png": "35e4f6c78aa02cb5343cd25b4884d3e5",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Reddit.png": "358a1e40a2baff789b802678bcf5a91d",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Share.png": "e3d14d9d332c5eb22971b24fa2fd4db7",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Skype.png": "34a400b066f2b96bba3cce4314483bdb",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Snapchat.png": "eb21d5e56b2b097a2fa57801596c731b",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Soundcloud.png": "e591d853bce816c809fb8548a1093d22",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Spotify.png": "e2f5b480741cf5d39d29146ad08fb074",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Tiktok.png": "3df6ce689db45165ba93b4ba38f6a8a8",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Twitch.png": "f8048b5f738421fb009fb6e2e2ec8c71",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Twitter.png": "5bf8362a1099b7d57a3a6e37cddb9726",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Vimeo.png": "470287f4f48e52a431f2d610fb8e2a71",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Wattpad.png": "8392163bd6ac373de2cd3c941826c103",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Whatsapp.png": "d151cdbd1673df099d58a340e7c62aa0",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Youtube1.png": "6b073694b35f53f4a0cbf4a280c514b0",
"assets/assets/social_media_icons/128px/Black/Icon_128px_Youtube2.png": "066d2c95f08b727896d2324a67fdd228",
"assets/assets/social_media_icons/128px/White/Icon_128px_Amazon.png": "bec4ae5e74c297c5d9284f562b0847f2",
"assets/assets/social_media_icons/128px/White/Icon_128px_Bag.png": "9eb13e2192270f6ff488cc5eaff9d881",
"assets/assets/social_media_icons/128px/White/Icon_128px_Behance.png": "1682b5b1d914c0793da220ed8aece0b6",
"assets/assets/social_media_icons/128px/White/Icon_128px_Cart.png": "dbcfc1cd6801f9215eef1d196d844af2",
"assets/assets/social_media_icons/128px/White/Icon_128px_Discord.png": "560c326d783da0156c9d20f878085238",
"assets/assets/social_media_icons/128px/White/Icon_128px_Email.png": "4e1380ef20355e3cd75c2fb5de8e4bfa",
"assets/assets/social_media_icons/128px/White/Icon_128px_Etsy.png": "8fdfb579f15037768faa53d1f07c260f",
"assets/assets/social_media_icons/128px/White/Icon_128px_Facebook.png": "bfa9e9287442eb12e0ec9682b3a0d88d",
"assets/assets/social_media_icons/128px/White/Icon_128px_Google%2520Plus.png": "1243d36f4fd8953b2e557e82a81772f9",
"assets/assets/social_media_icons/128px/White/Icon_128px_Heart.png": "d1fa7cc19c8d6e524e40bd300c317131",
"assets/assets/social_media_icons/128px/White/Icon_128px_Instagram.png": "8971c8131a2688f7975c2b9a9286ca19",
"assets/assets/social_media_icons/128px/White/Icon_128px_Like.png": "d486529a8306023e92a6bf4f255da793",
"assets/assets/social_media_icons/128px/White/Icon_128px_Linkedin.png": "14cfdf30ab9e5e80ee7dc19fa2a3ca0c",
"assets/assets/social_media_icons/128px/White/Icon_128px_Location.png": "1c8d56db1945da97b6dbaa09f02d017f",
"assets/assets/social_media_icons/128px/White/Icon_128px_Phone.png": "921a7fe1962d4fac7499d468d7df4426",
"assets/assets/social_media_icons/128px/White/Icon_128px_Pinterest.png": "e3be3a37c6a4e5444240234c243277e4",
"assets/assets/social_media_icons/128px/White/Icon_128px_Reddit.png": "ad83b70787720ddfd2b262039bac816d",
"assets/assets/social_media_icons/128px/White/Icon_128px_Share.png": "ecd9932f4daadcc35709767be5fc7343",
"assets/assets/social_media_icons/128px/White/Icon_128px_Skype.png": "71b505acbfb68e22b718190705c6b7dc",
"assets/assets/social_media_icons/128px/White/Icon_128px_Snapchat.png": "22587534e2de8ce4d3f85ec930eb48a5",
"assets/assets/social_media_icons/128px/White/Icon_128px_Soundcloud.png": "dc3b26563bc01342f1a06899ee74d229",
"assets/assets/social_media_icons/128px/White/Icon_128px_Spotify.png": "b057eeae7badcb4ac0ec17952f76b5d5",
"assets/assets/social_media_icons/128px/White/Icon_128px_Tiktok.png": "57d3fbebe87c4ec42deceeab80fe6ec4",
"assets/assets/social_media_icons/128px/White/Icon_128px_Twitch.png": "18c7011cf0a2c6c26b68da31ea77fc95",
"assets/assets/social_media_icons/128px/White/Icon_128px_Twitter.png": "3b3892d7fe4ca5bf40d20d546fbe06ab",
"assets/assets/social_media_icons/128px/White/Icon_128px_Vimeo.png": "f8c7fad6d233ee4b038217b5b15a7d37",
"assets/assets/social_media_icons/128px/White/Icon_128px_Wattpad.png": "6203558b9696f6263bce8ed0127c753d",
"assets/assets/social_media_icons/128px/White/Icon_128px_Whatsapp.png": "50a4884c44188303fff9c82346981507",
"assets/assets/social_media_icons/128px/White/Icon_128px_Youtube1.png": "4fc59e2419e1dbbabde614ae2fb3a3cc",
"assets/assets/social_media_icons/128px/White/Icon_128px_Youtube2.png": "c32913e59faca748a0184b6f7531146e",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Amazon.png": "6df00893f43cb5ffad7b7a94efa9353b",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Bag.png": "6ae7c706b9ebf6844f281c1217e1e958",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Behance.png": "c0cc902be8644b487af86ad255ecbb36",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Cart.png": "c1ba9af7d3a8ab725a265a127876cfd1",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Discord.png": "8fee370a2843b304a6e076af908310fe",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Email.png": "f948c3c055113346e854a35e0aba458f",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Etsy.png": "d3ffa06d0e2829827e279cf8434744ba",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Facebook.png": "dd9fcc99421cb527530df1c6cd48760f",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Google%2520Plus.png": "84356f44c71ee53cb8838e1604ce3ce1",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Heart.png": "263ece3ff390928b12d20eb3c86baece",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Instagram.png": "0b17e1ace514ab1a37db6749c6ca3e3a",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Like.png": "574cb3773c6400547a78eafd56424f04",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Linkedin.png": "2a825dc4cf157ba5583f85c931f753cc",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Location.png": "81754c310ce998bbeaa991fa7de3f9ce",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Phone.png": "fa4804d7828e3ed0e0a39c4c675a56a7",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Pinterest.png": "40a8d8a8181b6e9aee70d525ba822f22",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Reddit.png": "dbc12d72951d99c48c57b38f33f0ad3b",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Share.png": "3647b2aa627895b6fc267cafd993cd4f",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Skype.png": "c868e723e22ae51e1465152d7ec706ea",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Snapchat.png": "14dbfdafa98a3d5dfa6be1a816c052a5",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Soundcloud.png": "a16de394c867003e1a3ff905770bae4b",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Spotify.png": "19b86f41c9643c764bfe7dcc57e43234",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Tiktok.png": "bc5ab5abab0dbe9d686e592d29599cfe",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Twitch.png": "0b6adb83d6d781dea6669113bd2dc3a3",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Twitter.png": "33926f8fa5e1bf7204c33b93dd91acab",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Vimeo.png": "5a91c380ddf57289a552132866d86c1b",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Wattpad.png": "3b031f289b2f5ef971cfed9bd383a7cd",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Whatsapp.png": "23d03e6da8fdd7e962b9eef8d5204924",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Youtube1.png": "4a390b50e83dc613970539899a1ad91a",
"assets/assets/social_media_icons/256px/Black/Icon_256px_Youtube2.png": "bc9ec9e81983e8991d27d127940a0452",
"assets/assets/social_media_icons/256px/White/Icon_256px_Amazon.png": "32fe0bc406be0cd8f6eddfd8ff1f0de4",
"assets/assets/social_media_icons/256px/White/Icon_256px_Bag.png": "26afb47a60f65dbfb58e9a7150bfc5c6",
"assets/assets/social_media_icons/256px/White/Icon_256px_Behance.png": "3ce89dbfcab3daa354936fd3c1dafa4a",
"assets/assets/social_media_icons/256px/White/Icon_256px_Cart.png": "f0b06e4d18098920caea20f0fe5a8d18",
"assets/assets/social_media_icons/256px/White/Icon_256px_Discord.png": "a3c33d690c22f47f2cb5b4492178b22d",
"assets/assets/social_media_icons/256px/White/Icon_256px_Email.png": "40f5c1bdf78061fce05c19fac9cd1b21",
"assets/assets/social_media_icons/256px/White/Icon_256px_Etsy.png": "70d204ae3193b59182ae14169a3bad16",
"assets/assets/social_media_icons/256px/White/Icon_256px_Facebook.png": "83c51b7655bcaae2b21e48869953178d",
"assets/assets/social_media_icons/256px/White/Icon_256px_Google%2520Plus.png": "6b34db5e510149e6826f404d00a11f0d",
"assets/assets/social_media_icons/256px/White/Icon_256px_Heart.png": "8b44de9d95e3d4970a9db7dcfb801c33",
"assets/assets/social_media_icons/256px/White/Icon_256px_Instagram.png": "7af1cb4470d90ceb06b161013cb08191",
"assets/assets/social_media_icons/256px/White/Icon_256px_Like.png": "3a973b95e94d49e57e4e8abdf6f14c05",
"assets/assets/social_media_icons/256px/White/Icon_256px_Linkedin.png": "f187b7412ba0261842b5d7177f4de44b",
"assets/assets/social_media_icons/256px/White/Icon_256px_Location.png": "44485221d61ffcbdec9e0323069393f4",
"assets/assets/social_media_icons/256px/White/Icon_256px_Phone.png": "1f7d01192126fbcf4a12bcb856eadb3b",
"assets/assets/social_media_icons/256px/White/Icon_256px_Pinterest.png": "d59622f5e044eba6e9712ffdf6bec407",
"assets/assets/social_media_icons/256px/White/Icon_256px_Reddit.png": "d14bc367d50c5e5c8deb920eab359015",
"assets/assets/social_media_icons/256px/White/Icon_256px_Share.png": "715317472a2b672c11baf0e4f78ced9d",
"assets/assets/social_media_icons/256px/White/Icon_256px_Skype.png": "21d50b691c7a9e837ead26dc810ff1d7",
"assets/assets/social_media_icons/256px/White/Icon_256px_Snapchat.png": "3352689759d6d96995110228d4a761d4",
"assets/assets/social_media_icons/256px/White/Icon_256px_Soundcloud.png": "2ee25ac605eb6385968ee2b3e1e392bb",
"assets/assets/social_media_icons/256px/White/Icon_256px_Spotify.png": "0a4dddef43f32e596be964327b546092",
"assets/assets/social_media_icons/256px/White/Icon_256px_Tiktok.png": "fa3042adb6a8b7a00ca755368b634787",
"assets/assets/social_media_icons/256px/White/Icon_256px_Twitch.png": "e6e642b414e1f78aa857942252afd234",
"assets/assets/social_media_icons/256px/White/Icon_256px_Twitter.png": "0000312c36f032ba1a44873694aeb05a",
"assets/assets/social_media_icons/256px/White/Icon_256px_Vimeo.png": "7d3b29d846676a7d4e310291521931d8",
"assets/assets/social_media_icons/256px/White/Icon_256px_Wattpad.png": "2e51ff8800d7abde87b1486e49c55677",
"assets/assets/social_media_icons/256px/White/Icon_256px_Whatsapp.png": "d469241a1d41a5f8db1fc2339c749bd7",
"assets/assets/social_media_icons/256px/White/Icon_256px_Youtube1.png": "0fad8cd6d91e106bec2f918394a4f0af",
"assets/assets/social_media_icons/256px/White/Icon_256px_Youtube2.png": "4461d71e33f48925dc982bcbd9ca7e18",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Amazon.png": "e8fe75946f99b533b77270dd52b1ab45",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Bag.png": "b65625ccb3bad58fe58494a12f7b4af0",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Behance.png": "57506962b745419c0a8a57975f52dd72",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Cart.png": "9dcb29684cb9cdebf35eae3d6463e7b1",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Discord.png": "819f16852dc6c4863f1609e3864306ff",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Email.png": "7be75078d61cf79a1a83ff88f1ebd55d",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Etsy.png": "81e066ad99f24d974d3362a85303bbe1",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Facebook.png": "ec78cfbb3827d3abede8acb4f9515b7c",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Google%2520Plus.png": "c7220002e2112c287ebb3d59c97770ed",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Heart.png": "3e124b79fff15ac8ef8a932e1b714a65",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Instagram.png": "51f037e9f2bf962fe2e92536f2acf9b9",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Like.png": "a541a3d7ff65a4b97bd6c0012c5aba3a",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Linkedin.png": "1b4d9b7e37d50990da2e76ea23f2f2c7",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Location.png": "11db2ccab7f782408aced4b3af0d852f",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Phone.png": "2c5ed05673a20793a48eb463ef866879",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Pinterest.png": "71dbe65acd42980d70b578c59ecef5aa",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Reddit.png": "a1b4662766357aa8994febe248fdda8f",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Share.png": "7e82cee2b12d6ab4bf44d1a196f50867",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Skype.png": "35cce2dfea8ffab4634a92728430237e",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Snapchat.png": "7e1a446e67f7142a994f4c63b0595ed1",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Soundcloud.png": "7710f15d8d0ce396348fe7992d33b94f",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Spotify.png": "3ec6a552038a6005f97249914be5c14d",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Tiktok.png": "b685c7ea67f9a8007222c96e9b390c24",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Twitch.png": "1ac4f0bef52bfb29d5c1cfaf79bd0433",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Twitter.png": "1dd80a9be95a91d9dc81270e309a2b22",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Vimeo.png": "bfa21782e7b83b7a7a62931d0ca86e7b",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Wattpad.png": "297cfda23cb0aeb8fe63f7507cf7d0b3",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Whatsapp.png": "ae0f57c6ccdcacd2746613b222533e34",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Youtube1.png": "5fbd34665092ddaca2652e6a8af92438",
"assets/assets/social_media_icons/32px/Black/Icon_32px_Youtube2.png": "daca713fc1b7d47f6435a52672a2cfea",
"assets/assets/social_media_icons/32px/White/Icon_32px_Amazon.png": "8f146c87861920630920a53ab6317a70",
"assets/assets/social_media_icons/32px/White/Icon_32px_Bag.png": "174ca0ce61bc3e148cde48a58e4006b6",
"assets/assets/social_media_icons/32px/White/Icon_32px_Behance.png": "fba81fb721f900793b796acc26739e33",
"assets/assets/social_media_icons/32px/White/Icon_32px_Cart.png": "5d5e73a2eea63c84c6b77ebdeea3c33a",
"assets/assets/social_media_icons/32px/White/Icon_32px_Discord.png": "f1823aa025b16f68082df043e0f80673",
"assets/assets/social_media_icons/32px/White/Icon_32px_Email.png": "e43bcb2b7fd027e6255abed46fae9d9f",
"assets/assets/social_media_icons/32px/White/Icon_32px_Etsy.png": "21ed9c613fcb5b9564595dd199847744",
"assets/assets/social_media_icons/32px/White/Icon_32px_Facebook.png": "24fde66658f16e929f2f4e1c208eb8a2",
"assets/assets/social_media_icons/32px/White/Icon_32px_Google%2520Plus.png": "3ff2a8a42e2c9550541e9734f9e227af",
"assets/assets/social_media_icons/32px/White/Icon_32px_Heart.png": "8049130cff5c599059d6395cd37f88f3",
"assets/assets/social_media_icons/32px/White/Icon_32px_Instagram.png": "35752a67abedcfcf11dc2e6e8c94e549",
"assets/assets/social_media_icons/32px/White/Icon_32px_Like.png": "b5554f0b84a40a77bc70f585f131aeaf",
"assets/assets/social_media_icons/32px/White/Icon_32px_Linkedin.png": "ab31911e9a73275d952aa042fa78d7c8",
"assets/assets/social_media_icons/32px/White/Icon_32px_Location.png": "ca2bab8513df21060fdba1d27471145c",
"assets/assets/social_media_icons/32px/White/Icon_32px_Phone.png": "a3bb6c8a482546a41c688fc18112a2f1",
"assets/assets/social_media_icons/32px/White/Icon_32px_Pinterest.png": "1164a095788d4e420a26e460c0e7381d",
"assets/assets/social_media_icons/32px/White/Icon_32px_Reddit.png": "d7c85332c2ebb4c40bbe91450e266293",
"assets/assets/social_media_icons/32px/White/Icon_32px_Share.png": "10a1506a589b170719c32b93b80a53ae",
"assets/assets/social_media_icons/32px/White/Icon_32px_Skype.png": "e8c55165e276d9d8f010dc11b611d771",
"assets/assets/social_media_icons/32px/White/Icon_32px_Snapchat.png": "625a1e1012788f18b2282a9d2dc7f15d",
"assets/assets/social_media_icons/32px/White/Icon_32px_Soundcloud.png": "9f5688ef2d0208b5428687c15e7957d5",
"assets/assets/social_media_icons/32px/White/Icon_32px_Spotify.png": "a1df952b4fb534b1cbe91cef9b9e7392",
"assets/assets/social_media_icons/32px/White/Icon_32px_Tiktok.png": "f34533a88c0018d5e680be22778241b8",
"assets/assets/social_media_icons/32px/White/Icon_32px_Twitch.png": "954f396f6a630c39ad623aa8f693d919",
"assets/assets/social_media_icons/32px/White/Icon_32px_Twitter.png": "8b21fe5201a7adf7936e2839b0894927",
"assets/assets/social_media_icons/32px/White/Icon_32px_Vimeo.png": "e233523ea988a2c324ca122f98eef378",
"assets/assets/social_media_icons/32px/White/Icon_32px_Wattpad.png": "1d4a7b4058e6d9b7369651646b36de04",
"assets/assets/social_media_icons/32px/White/Icon_32px_Whatsapp.png": "2cba09fef2ff9478f0efe7be38c3aa56",
"assets/assets/social_media_icons/32px/White/Icon_32px_Youtube1.png": "259fc1272489a1113104a4fe0ebdca83",
"assets/assets/social_media_icons/32px/White/Icon_32px_Youtube2.png": "79c77846225746e5bb440f64e43493fa",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Amazon.png": "406a16f4c4c230df42a6a32cadd7361a",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Bag.png": "3afeaa9f35585e800739bdd256cd8754",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Behance.png": "048919b967b6cb33077a3c17165e8904",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Cart.png": "ac5657ec82b639486ebf615e640708cd",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Discord.png": "dc2d5b743f05ec0f1680de6e9a3e1023",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Email.png": "3fc01f08b449200b1a1bb950c3775fd6",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Etsy.png": "ed97bb9b327cd971c3663507f60a119e",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Facebook.png": "2def661f8ae43a8b4aaa0f7b5d00ddee",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Google%2520Plus.png": "16f49bdfb49bde2afb30c7039e869338",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Heart.png": "661d702a8f51d1f3fc58248e3b605932",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Instagram.png": "24f1b8c3a0e1c7b001ae892bf2a26712",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Like.png": "e984711197ca7c97d75f8aed64406589",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Linkedin.png": "26718ff01f10c317872717003fc47c9e",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Location.png": "ac567598aa3a41e38c4821327cc12c31",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Phone.png": "6bf5d4994f1fd82e86ebd2d1c63bdaa6",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Pinterest.png": "0e663d09f424028f5673324e508d2bc5",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Reddit.png": "dbcfd47c5ab3af6b188bc1b63c411bbf",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Share.png": "15d6386fb434e38578899c3409907c41",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Skype.png": "c84ad085d2656320a39313b2c05c6722",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Snapchat.png": "a262a1b0ce294f00872c5303069e5817",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Soundcloud.png": "bfbca0036d0f4be9914ad67ed372d3ae",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Spotify.png": "384073e8ef1687d77c227f347f61ae9b",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Tiktok.png": "6db1ae873f9f9d02a6c388973dc78581",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Twitch.png": "ce1c3e16f0dd86021690688dee4e48a3",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Twitter.png": "85d64f92df682c385613337418a46daa",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Vimeo.png": "6d533180272219f06f6857f13679bca3",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Wattpad.png": "037e8dbb9a568c8d41be15c7841b6133",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Whatsapp.png": "c7940fe15736082c04647aab371dbb77",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Youtube1.png": "106566cbb56c89af91927c532c79be40",
"assets/assets/social_media_icons/64px/Black/Icon_64px_Youtube2.png": "25d4dfa699909574e69a83fc93788f99",
"assets/assets/social_media_icons/64px/White/etsy_64px.png": "d86d49bcb716054ef1ad9ec426453508",
"assets/assets/social_media_icons/64px/White/facebook_64px.png": "bc9c05e1feec560da70124bbba418c11",
"assets/assets/social_media_icons/64px/White/Icon_64px_Amazon.png": "c947b4898428a0a87badf85a92848d56",
"assets/assets/social_media_icons/64px/White/Icon_64px_Bag.png": "c97082716f24739e793b2251dfa978e2",
"assets/assets/social_media_icons/64px/White/Icon_64px_Behance.png": "9800addbf0f5fd2742bbff379970a551",
"assets/assets/social_media_icons/64px/White/Icon_64px_Cart.png": "a5e4951d12753458626e1083485aacd5",
"assets/assets/social_media_icons/64px/White/Icon_64px_Discord.png": "03a4dc7632a52a8ab97fa6f5ccea2b05",
"assets/assets/social_media_icons/64px/White/Icon_64px_Email.png": "2de7931ac2c76479f2c76219b49603f1",
"assets/assets/social_media_icons/64px/White/Icon_64px_Google%2520Plus.png": "d4b9b14e89609ecc4ebcb3da05eaabc9",
"assets/assets/social_media_icons/64px/White/Icon_64px_Heart.png": "1e0708f7f7b9b1c33a9dfc06eebf315f",
"assets/assets/social_media_icons/64px/White/Icon_64px_Like.png": "5549b0e02e537e8d0ea80099e4f9dd8a",
"assets/assets/social_media_icons/64px/White/Icon_64px_Linkedin.png": "c76584afa2f32a752530837766f58c1a",
"assets/assets/social_media_icons/64px/White/Icon_64px_Location.png": "3f253639c9f7a8369de57fff8eb29a5d",
"assets/assets/social_media_icons/64px/White/Icon_64px_Phone.png": "2d67e895a64daff9bd9feb87dc60bd74",
"assets/assets/social_media_icons/64px/White/Icon_64px_Pinterest.png": "4b8bfbeee07d623ba52a0d5e7f26bef4",
"assets/assets/social_media_icons/64px/White/Icon_64px_Reddit.png": "3021a841a459c0474a1540c71c5c6297",
"assets/assets/social_media_icons/64px/White/Icon_64px_Share.png": "1ad372e4f33c8f750c782592524fee6d",
"assets/assets/social_media_icons/64px/White/Icon_64px_Skype.png": "c11d4aa3e01f7d6ef4a78f3f5c6dc1eb",
"assets/assets/social_media_icons/64px/White/Icon_64px_Snapchat.png": "2725e58dcbedeea616b678e882855652",
"assets/assets/social_media_icons/64px/White/Icon_64px_Soundcloud.png": "9f481a0cddc717c3ede9e96f87a47283",
"assets/assets/social_media_icons/64px/White/Icon_64px_Spotify.png": "7fc1668df09d8a471f24edd460b17e25",
"assets/assets/social_media_icons/64px/White/Icon_64px_Twitch.png": "11ed826bc88246f2757192eaaed6d484",
"assets/assets/social_media_icons/64px/White/Icon_64px_Twitter.png": "908c254b8d8915553a7ec3dad225167a",
"assets/assets/social_media_icons/64px/White/Icon_64px_Vimeo.png": "fecbc3ecba57ade586b1f3178a5b2662",
"assets/assets/social_media_icons/64px/White/Icon_64px_Wattpad.png": "a5e8feb3856eecdaf36a006a184a8637",
"assets/assets/social_media_icons/64px/White/Icon_64px_Whatsapp.png": "2a82d1bd6f19919d3a506779856833a0",
"assets/assets/social_media_icons/64px/White/Icon_64px_Youtube1.png": "932165573aee1045467470f0e9649af1",
"assets/assets/social_media_icons/64px/White/Icon_64px_Youtube2.png": "3c3ed66b613cad4276770b0db5b75927",
"assets/assets/social_media_icons/64px/White/insta_64px.png": "4335c74dfd4b360d013a2e3a70157caf",
"assets/assets/social_media_icons/64px/White/tiktok_64px.png": "1f9151ff135f1379ecea386d264d77fa",
"assets/assets/ui_features/Celestial%252039.webp": "ab752a7f959949e8f645092ca7b15576",
"assets/assets/ui_features/celestial_sun.webp": "2ed0891d67a2e5ba66a6e4fe0824cdd7",
"assets/assets/ui_features/hand_moon.webp": "ed85bd8b1fb11be1922522f7a57ce709",
"assets/assets/ui_features/hanging_moon.webp": "18f301d2ba3b67f03062aabe425acbcf",
"assets/assets/ui_features/InspiredBeautyCard.webp": "06e3417fc0ae99fade81480b6b4e426e",
"assets/assets/ui_features/IntentionCard.webp": "99869a9244fa23a94849ccaae4efaa44",
"assets/assets/ui_features/MadeWithCareSliver.webp": "a090670af9214fc6d52c600f4f635c51",
"assets/assets/ui_features/MadeWithHeart.webp": "174cb10dffca68a8a5872d7dc1abf506",
"assets/assets/ui_features/WearYourStory.webp": "018a27d0d098870ffd84a5abb3720e55",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "57dab2c8cc0ad10587ae93498fa7deb5",
"assets/NOTICES": "f1e4e70bf7b56044cc72728cf3a37ee1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "39f5e71fe8339b10b639681865ea328d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9cc842431b3a4e71ff22acd171edfb77",
"/": "9cc842431b3a4e71ff22acd171edfb77",
"main.dart.js": "e49f8a258505fc0992d79f298dc2101b",
"manifest.json": "2e0593fec709852c16afdc0b51d9ccb3",
"version.json": "1dd0c7feb74eec05e9e836684a0b90ac"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
