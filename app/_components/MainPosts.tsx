import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


interface Post {
    title: string;
    date: string;
    content: string;
  }

interface MainProps {
  posts: Post[];
  title: string;
}

export default function Main(props: MainProps) {
  const { posts, title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post, index) => (
        <div key={index} className="markdown">
          <Typography variant="h6" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {post.date}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {post.content}
          </Typography>
          <Divider />
        </div>
      ))}
    </Grid>
  );
}