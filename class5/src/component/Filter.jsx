

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;
   
    function filterHandler(filter) {
        setCategory(filter.title);
    }

    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">

            {
                filterData.map((filter) => {
                    return (
                        <button key={filter.id} onClick={() => filterHandler(filter)} className={`border-2 border-bgDark2 px-4 py-2 rounded-lg ${category === filter.title ? "bg-bgDark2 text-white" : "bg-white text-bgDark2"}`}>{filter.title}</button>
                    )
                })
            }

        </div>
    )



}

export default Filter;