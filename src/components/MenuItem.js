
export default function MenuItem(props) {
  return (
    <li onClick={()=>{props.setShowSection(props.title)}} className="flex items-center cursor-pointer mb-5 group">
      <h3 className={`${props.showSection === props.title ? "text-orange-400" : "text-white"} group-hover:text-orange-400 ml-1 text-lg`}>{props.title}</h3>
    </li>
  )
}
