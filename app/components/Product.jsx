export default function Product({
    name,
    description,
    rating,
    category,
    // stock,
    image,
}) {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                border: "2px solid green",
                padding: '20px',
                width: '300px',
                height: '400px',
                margin: '20px',
                backgroundColor: 'white',
                color: 'black'
            }}>
                <div>
                    <img src={image}
                        style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                            display: "block",
                        }} />
                        
                </div>
                <div>
                    <p>{name}</p>
                    <p>{description}</p>
                    <p>{category}</p>
                    <p>rating : {rating}</p>
                    {/* <p>{price}</p> */}
                </div>
            </div>
        </>
    );
}
