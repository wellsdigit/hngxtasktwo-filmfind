import { IoChevronForwardOutline } from "react-icons/io5";

const SortTitle = ({title}) => {
    return(
        <>
            <div className="flex justify-between items-center">
                <h2 className="text-xl md:text-3xl font-semibold">{title}</h2>
                <a href="#" className="text-rose-700 gap-1 font-semibold flex items-center">See More <IoChevronForwardOutline className="text-lg stroke-rose-700"/></a>
            </div>
        </>
    )
}

export default SortTitle;

