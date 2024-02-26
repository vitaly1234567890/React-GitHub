import React, {useState} from 'react';
import {ReposMain} from "../models/models";
import {useActions} from "../hooks/actions";
import {useAppSelector} from "../hooks/redux";

export const RepoCard = ({repo}: { repo: ReposMain }) => {
    const {favourites} = useAppSelector(state => state.github)
    const [isAdded, setIsAdded] = useState(favourites.includes(repo.html_url))
    const {addFavourite, removeFavourite} = useActions()

    const addToFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addFavourite(repo.html_url)
        setIsAdded(true)
    }
    const removeToFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        removeFavourite(repo.html_url)
        setIsAdded(false)
    }

    return (
        <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
            <a href={repo.html_url} target="_blank">
                <h2 className="text-lg font-bold">{repo.full_name}</h2>
                <p className="text-sm">
                    Forks: <span className="font-bold">{repo.forks}</span>
                    Watchers: <span className="font-bold">{repo.watchers}</span>
                </p>
                <p className="text-sm font-thin">{repo?.description}</p>

                {!isAdded ?
                    <button
                    className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all mr-2"
                    onClick={addToFavourite}
                >Add
                </button>
                    :
                    <button
                        className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
                        onClick={removeToFavourite}
                    >Delete
                    </button>
                }

            </a>
        </div>
    );
};