import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const TrelloCard = ({id, message, style}) => {
  return (
    <Card key={id} sx={{ maxWidth: 300 }} style={style}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {message}
      </Typography>
    </CardContent>

  </Card>
  )
}

export default TrelloCard;