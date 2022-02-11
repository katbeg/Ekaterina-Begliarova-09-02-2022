import React,
{useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CityCard(props) {
  const [favorite, setFavorite] = useState(true);


  const handleAddToFavoriteClick = () => {
    setFavorite(!favorite);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={props.city}
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleAddToFavoriteClick} aria-label="add to favorites">
          {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon/>}
        </IconButton>
      </CardActions>
    </Card>
  );
}
