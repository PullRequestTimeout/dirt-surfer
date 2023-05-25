import React, { useState } from "react"
import { Box, Card, CardContent, CardHeader, Typography, IconButton, Collapse } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import StarIcon from "@mui/icons-material/Star"
import { styled } from "@mui/material/styles"

const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}))

export default function TrailCard({ trailName, difficulty, starRating, description, descriptiveForecast }) {
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const stars = []
    for (let i = 0; i < starRating; i++) {
        stars.push(<StarIcon key={i} />)
    }

    return (
        <Box width="49%">
            <Card>
                <CardHeader
                    title={trailName}
                    action={
                        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                            <ExpandMoreIcon aria-label="expand" />
                        </ExpandMore>
                    }
                    subheader={<Box display="flex">{stars}</Box>}
                ></CardHeader>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph fontWeight={"700"}>
                            Description:
                        </Typography>
                        <Typography paragraph>{description}</Typography>
                        <Typography paragraph fontWeight={"700"}>
                            Forecast:
                        </Typography>
                        <Typography paragraph>{descriptiveForecast}</Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Box>
    )
}
