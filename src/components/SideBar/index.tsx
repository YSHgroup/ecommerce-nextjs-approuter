const SideBar = () => {
  return (
    <nav className='w-32 h-10 cursor-pointer rounded-md shadow-sm shadow-slate-300 bg-gradient-to-b from-sky-800 fixed z-10 top-40 left-1'>
      <div className='h-full'>
				<h1 className="flex justify-center items-center w-full h-full ">Categories</h1>
        <select className='hidden' name='categories' id='categories'>
          <option value='all'>All</option>
        </select>
      </div>
    </nav>
  )
}

export default SideBar
