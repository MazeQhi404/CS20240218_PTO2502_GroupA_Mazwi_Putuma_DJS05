import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchShowById } from "../api/fetchData";
import Loading from "../components/UI/Loading";
import Error from "../components/UI/Error";
import SeasonAccordian from "../components/SeasonsAccordian";
import { GENRE_MAP } from "../data/genreMap";
import { formatDate } from "../utils/formatDate";

/**
 * SHOW DETAIL PAGE - DYNAMIC ROUTE: /show/:id
 */

export default function ShowDetail() {
    //Get id from URL:
    const { id } = useParams();

    //Local state for this specific show
    const [podcast, setPodcast] = useState(null); //Full show data
    const [loading, setLoading] = useState(true); // Show spinner
    const [error, setError] = useState(null); //Show error message

}