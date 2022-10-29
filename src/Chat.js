export function Chat(data)
{
    return(
        <div>
            <div class="card">                            
            <img src={data.photo} class="card-img-top" alt="..." style={{width: "100px",height:"100px"}}/>
            <div class="card-body">
                <h5 class="card-title">{data.name}</h5>  
                <p class="card-text">{data.message}</p>
                <p class="card-text">{data.time}</p>
            </div>
            </div>
        </div>
    )
}
//chat application
//photo, name, message, time
//{} flower braces are use to evaluate the data.name otherwish output will only show data.name as it is.