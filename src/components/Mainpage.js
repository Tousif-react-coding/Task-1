import React from 'react'

function Mainpage() {
    return (
        <>
            <div className="container d-flex ">
                <div className='half'>
                    <h1 style={{
                        fontFamily: 'sans-serif',
                        color: 'tomato',
                        textAlign: 'center'
                    }}>Power of BUSINESS</h1>
                    <h2 className='' style={{ fontFamily: 'cursive', color: 'purple', textAlign: 'center', width: 'object-fit content' }}>WOMAN</h2>
                    <p className='container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore corporis blanditiis magnam omnis ab, possimus asperiores repellendus. Sapiente fugiat accusantium dicta maiores tempore distinctio repellat quam cupiditate. Consequuntur, totam deleniti.</p>
                    <p className='container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore corporis blanditiis magnam omnis ab, possimus asperiores repellendus. Sapiente fugiat accusantium dicta maiores tempore distinctio repellat quam cupiditate. Consequuntur, totam deleniti.</p>
                    <button className=" btn btn2 mx-2" onClick={(false)}>Read More..</button>
                    <h1 className='container mx-2 my-2' style={{ textAlign: 'center', color: '#25385c',textDecoration: 'underline', }}>Our Partners</h1>
                    <div className="icon mx-2 my-2">
                        <a href="https://www.facebook.com"><i className="fa-brands fa-facebook mx-2 my-2"></i></a>
                        <a href="https://www.instagram.com"><i className="fa-brands fa-instagram mx-2 my-2"></i></a>
                        <a href="https://www.twitter.com"><i className="fa-brands fa-square-twitter mx-2 my-2"></i></a>
                        <a href="https://www.whatsapp.com"><i className="fa-brands fa-whatsapp mx-2 my-2"></i></a>
                    </div>
                </div>

                <div className="container half ">
                    <img className='mx-2 my-2' src="https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="banner" style={{ border: '4px solid silver', borderRadius: '133px', width: '83%' }} />
                    <img className='mx-2 my-2' src="https://media.istockphoto.com/id/1398994132/photo/happy-businesswoman-using-a-digital-tablet-young-leading-businesswoman-using-a-wireless.webp?b=1&s=170667a&w=0&k=20&c=z-tvJG0r-SNUrIGwZb7YjLI9f_cOnkN30vcPafskrkQ=" alt="banner" style={{ border: '4px solid silver', borderRadius: '133px', left: '212px', position: 'relative' }} />

                </div>
            </div>


        </>
    )
}

export default Mainpage
