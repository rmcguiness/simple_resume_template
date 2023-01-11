import React from 'react'
import '../styles/Projects.css';
import projectImage from '../images/project1.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Projects = () => {
  return (
    <div className='projects-container'>
        <h2>Projects</h2>
        <hr/>
        <div className='cards'>
            <Card className="project1" sx={{ maxWidth: 445 }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image={projectImage}
                    title="Project Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Ecommerce Store
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href='https://mkr-ecommerce.vercel.app/'>Learn More</Button>
                </CardActions>
            </Card>
        </div>
        
    </div>
  )
}

export default Projects