const List = ({items , sourceName , ItemComponent})=>{
    return(
        <>
          {
            items.map((item,index)=>{
                return(
                <ItemComponent key={index} {...{[sourceName] : item}}/>
            )})
          }
        </>
    )
}

export default List;