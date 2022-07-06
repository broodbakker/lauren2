import { Grid, AspectRatio, Image } from '@chakra-ui/react'

interface IimageGrid {

}

export const ImageGrid = () => {
  return (
    <Grid templateColumns='repeat(4, 1fr)' >
      <AspectRatio maxW='400px' ratio={4 / 3}>
        <Image src='https://res.cloudinary.com/dta9vptzh/image/upload/v1655718231/lauren/lauren3.jpg' alt='lauren' objectFit='cover' />
      </AspectRatio>
      <AspectRatio maxW='400px' ratio={4 / 3}>
        <Image src='https://res.cloudinary.com/dta9vptzh/image/upload/v1655718212/lauren/lauren4.jpg' alt='lauren' objectFit='cover' />
      </AspectRatio>
      <AspectRatio maxW='400px' ratio={4 / 3}>
        <Image src='https://res.cloudinary.com/dta9vptzh/image/upload/v1655718206/lauren/lauren5.jpg' alt='lauren' objectFit='cover' />
      </AspectRatio>
      <AspectRatio maxW='400px' ratio={4 / 3}>
        <Image src='https://res.cloudinary.com/dta9vptzh/image/upload/v1655718205/lauren/lauren6.jpg' alt='lauren' objectFit='cover' />
      </AspectRatio>
    </Grid>
  )
}

export default ImageGrid