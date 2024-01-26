

function Paginate(prop) {
    let {totalPosts, totalPagePosts, changePage} = prop;

    // totalPosts = 50
    // totalPagePosts = 5;
    // Button to be displayed = 10
    // 1 2 3 4 5 6 7 8 9 10

    // totalPosts = 52
    // totalPagePosts = 5;
    // Button to be displayed = 11  (10[5 posts] + 1 [2 posts])

    let totalButtons = Math.ceil(totalPosts / totalPagePosts); 
    let buttons = [];
    
    for (let i = 1; i <= totalButtons; i++)  {
        buttons.push(i);
    }

  return (
    <div>
      {
        buttons.length > 0 && buttons.map((button) => {
            return (
                <button key = {button} onClick={() => changePage(button)}>{button}</button>
            )
        })
      }
    </div>
  )
}

export default Paginate
