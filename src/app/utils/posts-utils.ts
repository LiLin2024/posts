import { FetchedPost, Post, PostTypes } from "../types.model";

const dummyTexts: string[] = [
  "Vestibulum porttitor laoreet tortor eget suscipit. Cras cursus egestas felis, id lobortis ex elementum eget. Vivamus quis accumsan orci.",
  "Suspendisse non quam sit amet felis dictum faucibus. Quisque sed laoreet ante. Nam convallis bibendum turpis vel porta. Vivamus feugiat aliquet rhoncus.",
  "In gravida, mauris ac efficitur lobortis, nibh lorem eleifend ipsum, at scelerisque neque velit ut est. Nunc sapien neque, consequat eu scelerisque ut, placerat non ipsum.",
  "Proin condimentum suscipit tempus. Nulla mi risus, luctus ac tellus ut, feugiat egestas erat. In ac odio ac ante pellentesque facilisis.",
  "Aenean convallis elit purus, a finibus ligula sodales at. Sed nec velit massa. Aliquam faucibus vehicula ex.",
  ", ac molestie augue elementum vitae. Curabitur tincidunt aliquet est.",
  "Ac finibus mauris cursus vitae. Morbi ultrices ligula a semper commodo.",
  "Donec eget augue nec elit aliquam sagittis facilisis in nisl. Ut nec nibh id eros maximus placerat.",
  "Pellentesque volutpat consequat sapien, ac lobortis orci posuere ac. Phasellus nec vehicula tortor, eget bibendum leo. Fusce mattis ex consequat eros aliquam.",
  // "Pellentesque imperdiet metus vel malesuada porttitor. Vestibulum tincidunt sem vitae nunc tempor, et dapibus odio auctor.",
  // "Aenean aliquam, nisi eu rhoncus lacinia, eros elit tempus arcu, sit amet fermentum dolor velit at est. Duis metus tellus, eleifend a augue mollis, mattis lacinia nulla. Donec tristique nisi leo, sed mollis augue iaculis eget.",
  // "Vestibulum ut lacus non dui pharetra iaculis. Integer pretium vehicula quam, vitae accumsan sem varius rhoncus. Ut mollis tortor sit amet suscipit sollicitudin. Integer id sem quam."
]

const getParagraph = (sentenceAmount: number): string => {

  const validAmount = Math.max(sentenceAmount, 1);

  const sentences: string[] = Array.from({ length: validAmount }, () => {
    const randomSentenceIndex = Math.floor(Math.random() * dummyTexts.length)
    return dummyTexts[randomSentenceIndex]
  });
  return sentences.join('')
}

export const generateRandomParagraph = (paragraphAmount: number): string => {

  const newPosts: string[] = Array.from({ length: paragraphAmount }, () => {
    const randomSentenceAmount = Math.floor(Math.random() * 6)
    return getParagraph(randomSentenceAmount)
  });

  return newPosts.join('\n')
}

const getRandomDate = () => {
  const startTimestamp = new Date('1997-01-01').getTime();
  const endTimestamp = new Date().getTime();
  const randomTimestamp = startTimestamp + Math.random() * (endTimestamp - startTimestamp);
  return new Date(randomTimestamp);
}


const postTypes: PostTypes[] = ["work", "holiday", "hobby", "sport"]

export const getPostData = (fetchedData: FetchedPost[]): Post[] => {
  const updated: Post[] = fetchedData.map((data) => {
    const randomIndex: number = Math.floor(Math.random() * postTypes.length)
    const randomImageId = Math.floor(Math.random() * 200);
    const imgSrc = `https://picsum.photos/400/300?random=${randomImageId}`;
    return {
      ...data,
      body: generateRandomParagraph(4),
      imgSrc,
      type: postTypes[randomIndex],
      date: getRandomDate()
    }
  })
  return updated
}

