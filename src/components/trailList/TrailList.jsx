import React, { useEffect, useState } from "react";
import trailDataCall from "../../utils/trailDataCall.js"
import { Typography, Accordion } from '@mui/material'

export default function TrailList({ src }) {
    trailDataCall(src)
}