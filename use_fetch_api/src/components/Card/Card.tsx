import React, { FC } from "react"

export interface Post {
    id: string,
    title: string,
    body: string
}

export type CardProps = {
    post: Post
}

const Card: FC<CardProps> = (props)=>{
    const {title, body} = props.post

    return <div>
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
}

export {Card}