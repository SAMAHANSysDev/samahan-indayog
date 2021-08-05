import CardMedia from '@material-ui/core/CardMedia';
import React from 'react'
import { Card, CardActionArea, makeStyles } from '@material-ui/core';

function Cards({img, alt,title,id}) {
    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('id').value
        // const location = document.querySelector(target).offsetTop
        const location = document.querySelector(target)
        console.log(location);

        
    }
    const useStyles = makeStyles({
        root: {
            // maxWidth: 345,
            // maxHeight: 345,
            width: 134,
            height:567,
            
            '&:hover': {
                transform:"scale(1.08)",
                opacity:"1"
            }
        },
    });

    const classes = useStyles();
    return (
        <div className="cards">
            <Card className={classes.root} id='card' onClick={handleClick}>
                {/* <h4>{title}</h4> */}
                <CardActionArea >
                    <CardMedia 
                        component="img"
                        alt={alt}
                        id={id}
                        height="567"
                        image={img}
                        title={title}
                    />
                </CardActionArea>
            </Card>
        </div>
        
    );
}

export default Cards;