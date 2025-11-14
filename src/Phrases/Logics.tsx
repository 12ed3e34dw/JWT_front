// CoursesGrid.tsx
import React from "react";
import { Link } from "react-router-dom";

const CoursesGrid: React.FC = () => {
    return (
        <div className="grid">
            <Link to="/course?id=wild-animals&level=A1">
                {/*<img src="/img/wild.jpg" />*/}
                <p>Wild Animals — C1</p>
            </Link>
            <Link to="/course?id=wild-animals&level=B1">
                {/*<img src="/img/wild.jpg" />*/}
                <p>Wild Animals — C1</p>
            </Link>
        <Link to="/course?id=wild-animals&level=C1">
        {/*<img src="/img/wild.jpg" />*/}
            <p>Wild Animals — C1</p>
    </Link>

    <Link to="/course?id=birds&level=A1">
    {/*<img src="/img/birds.jpg" />*/}
        <p>Birds — A1</p>
    </Link>
            <Link to="/course?id=birds&level=B1">
                {/*<img src="/img/birds.jpg" />*/}
                <p>Birds — B1</p>
            </Link>
            <Link to="/course?id=birds&level=C1">
                {/*<img src="/img/birds.jpg" />*/}
                <p>Birds — C1</p>
            </Link>


            <Link to="/course?id=food&level=A1">
                {/*<img src="/img/food.jpg" />*/}
                <p>Food — B1</p>
            </Link>
    <Link to="/course?id=food&level=B1">
    {/*<img src="/img/food.jpg" />*/}
        <p>Food — B1</p>
    </Link>
            <Link to="/course?id=food&level=C1">
                {/*<img src="/img/food.jpg" />*/}
                <p>Food — B1</p>
            </Link>

    </div>
);
};

export default CoursesGrid;
