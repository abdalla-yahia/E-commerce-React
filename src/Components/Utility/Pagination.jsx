
import ReactPaginate from 'react-paginate'

function Paginations({pg,data}) {
  const handlePageClick =(e)=>{
    pg(e.selected +1 )
  }
 
const pageCount = data || 100
  return (
      <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',margin:'15px 0'}}>
            <ReactPaginate
                breakLabel="..."
                nextLabel="التالي >"
                onPageChange={pg?handlePageClick:null}
                marginPagesDisplayed={'2'}
                activeClassName='active'
                pageCount={pageCount}
                previousLabel="< السابق"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                nextClassName='page-item'
                previousClassName='page-item'
                pageClassName='page-item'
                breakClassName='page-item'
                nextLinkClassName='page-link'
                previousLinkClassName='page-link'
                pageLinkClassName='page-link'
                breakLinkClassName='page-link'
                activeLinkClassName='page-link-active'
      />
  </div>
  )
}

export default Paginations