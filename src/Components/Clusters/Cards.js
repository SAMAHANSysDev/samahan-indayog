import CardMedia from '@material-ui/core/CardMedia';
import React from 'react'
import { Card, makeStyles } from '@material-ui/core';

function Cards({ img, alt, title, id, mobile, style }) {
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
            width: '100%',
            // height: mobile ? 60 : 567,
            height: mobile ? 60 : 450,
            
            '&:hover': {
                transform:"scale(1.08)",
                opacity:"1"
            }
        },
    });

    const classes = useStyles();
    return (
        <div className="cards" style={style}>
            <Card className={classes.root} id='card' onClick={handleClick}>
                {/* <h4>{title}</h4> */}
                <CardMedia 
                    component="img"
                    alt={alt}
                    id={id}
                    // height={mobile ? "60" : "567"}
                    height={mobile ? "60" : "450"}
                    image={img}
                    title={title}
                />
            </Card>
        </div>
        
    );
}

export default Cards;