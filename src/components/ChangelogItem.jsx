import React from 'react';
import { Link } from 'gatsby'

export default function ChangelogItem({ slug, title, date, key }) {
    return (
        <Link key={key} href={`/${slug}`}>
            <a>
                <div>{title}</div>
                <div>{date}</div>
            </a>
        </Link>
    );
}