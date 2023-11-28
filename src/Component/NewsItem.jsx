
const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light m-3 d-inline-block" style={{maxWidth:"354px"}}>
  <img src={src} style={{height:"200px", width:'320px'}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"news by the us country"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
