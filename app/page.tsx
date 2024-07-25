import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import Header from './_components/Header';
import MainFeaturedPost from './_components/MainFeaturedPost';
import MainPosts from './_components/MainPosts';
import Sidebar from './_components/Sidebar';
import Footer from './_components/Footer';


const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];

const mainPosts = [
  {
    title: 'Sample blog post',
    date: 'April 1, 2020',
    content: `
      This blog post shows a few different types of content that are supported and styled with
      Material styles. Basic typography, images, and code are all supported.
      You can extend these by modifying.

      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
      Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
    `
  },
  {
    title: 'Another blog post',
    date: 'March 23, 2020',
    content: `
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
      Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
    `
  },
  {
    title: 'New feature',
    date: 'March 14, 2020',
    content: `
      This blog post shows a few different types of content that are supported and styled with
      Material styles. Basic typography, images, and code are all supported.
      You can extend these by modifying.
      This blog post shows a few different types of content that are supported and styled with
      Material styles. Basic typography, images, and code are all supported.
      You can extend these by modifying.
      This blog post shows a few different types of content that are supported and styled with
      Material styles. Basic typography, images, and code are all supported.
      You can extend these by modifying.
      This blog post shows a few different types of content that are supported and styled with
      Material styles. Basic typography, images, and code are all supported.
      You can extend these by modifying.
    `
  }
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <MainPosts title="From the firehose" posts={mainPosts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </>
  );
}
