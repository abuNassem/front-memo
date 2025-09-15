
import { useEffect, useState, useMemo, useContext } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/categories/hooks'
import { Tproduct } from '../../store/custom/tproduct'
import { setFilteredProducts } from '../../store/search&filter/filter'
import { useNavigate } from 'react-router-dom'
import { api } from '../../template/layout'

type Filters = {
  gender: string
  categories: string
  maxPrice: string
  size: string
  brand: string
  material: string
  color: string
  subcategory: string
}

const initialFilters: Filters = {
  gender: '',
  categories: '',
  maxPrice: '',
  size: '',
  brand: '',
  material: '',
  color: '',
  subcategory: ''
}

const FilterForm = () => {
  const select = useAppSelector(state => state.product.record)
  const dispatch = useAppDispatch()
  const [resultFilter, setResultFilter] = useState<Tproduct[]>([])
  const [currentCategory, setCurrentCategory] = useState<string[]>([])
  const navigate = useNavigate()

  const [filters, setFilters] = useState<Filters>(initialFilters)

  const clothingTypes = useMemo(() => [...new Set(select.map(ele => ele.subcategory))], [select])
  const colors = useMemo(() => [...new Set(select.map(ele => ele.color))], [select])
  const brands = useMemo(() => [...new Set(select.map(ele => ele.brand))], [select])
  const materials = useMemo(() => [...new Set(select.map(ele => ele.material))], [select])

  useEffect(() => {
    if (filters.gender) {
      const filtered = select.filter(ele => ele.gender === filters.gender)
      setCurrentCategory([...new Set(filtered.map(ele => ele.cat_prefix))])
    } else {
      setCurrentCategory([...new Set(select.map(ele => ele.cat_prefix))])
    }
  }, [filters.gender, select])

  useEffect(() => {
    const result = select.filter(ele =>
      (!filters.gender || filters.gender === ele.gender) &&
      (!filters.categories || filters.categories === ele.cat_prefix) &&
      (!filters.maxPrice || (!isNaN(Number(filters.maxPrice)) && Number(ele.price) <= Number(filters.maxPrice))) &&
      (!filters.size || filters.size === ele.size) &&
      (!filters.brand || filters.brand === ele.brand) &&
      (!filters.material || filters.material === ele.material) &&
      (!filters.color || filters.color === ele.color) &&
      (!filters.subcategory || filters.subcategory === ele.subcategory)
    )
    setResultFilter(result)
  }, [filters, select])
const context=useContext(api)
  const apply = async (e: React.FormEvent) => {
    e.preventDefault()
    await dispatch(setFilteredProducts(resultFilter))
    context?.setFilterMode(false)
    navigate('/filtration')
  }

  const resetFilters = () => {
    setFilters(initialFilters)
    dispatch(setFilteredProducts(select))
  }

  return (
     <form className='h-[90%] flex flex-col lg:flex-row gap-3 items-center justify-between'>
      <div id='lines' className='flex flex-col justify-between gap-4 lg:gap-0 w-[90%] md:border-2 p-4 h-full'>
        {/* Line 1 */}
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 place-self-center '>
          <select
            onChange={(e) => setFilters(prev => ({ ...prev, gender: e.target.value }))}
            value={filters.gender}
            className='py-1 px-2 h-[35px] border-2 border-zinc-400 rounded-2 text-sm outline-none bg-zinc-900'
          >
            <option value=''>All Genders</option>
            <option value='male'>male</option>
            <option value='female'>female</option>
          </select>

          <select
            onChange={(e) => setFilters(prev => ({ ...prev, categories: e.target.value }))}
            value={filters.categories}
            className='py-1 px-2 h-[35px] border-2 border-zinc-400 rounded-2 text-sm outline-none bg-zinc-900'
          >
            <option value=''>All Categories</option>
            {currentCategory.map((ele, index) => (
              <option key={index} value={ele}>{ele}</option>
            ))}
          </select>

          <select
            onChange={(e) => setFilters(prev => ({ ...prev, subcategory: e.target.value }))}
            value={filters.subcategory}
            className='py-1 px-2 h-[35px] border-2 border-zinc-400 rounded-2 text-sm outline-none bg-zinc-900'
          >
            <option value=''>All Clothing Types</option>
            {clothingTypes.map((ele, index) => (
              <option key={index} value={ele}>{ele}</option>
            ))}
          </select>

          <div className='flex gap-2 items-center'>
            <input
              type='text'
              value={filters.maxPrice}
              onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
              placeholder='Enter max price'
              className='md:w-[auto] ps-1 text-sm border-2 mx-auto border-zinc-400 rounded-sm h-[35px] md:px-2 bg-zinc-900 outline-none'
            />
          </div>
        </div>

        {/* Line 2 */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
          <select
            onChange={(e) => setFilters(prev => ({ ...prev, size: e.target.value }))}
            value={filters.size}
            className='py-1 px-2 h-[35px] border-2 border-zinc-400 rounded-2 text-sm outline-none bg-zinc-900'
          >
            <option value=''>All Sizes</option>
            <option value='XS'>XS</option>
            <option value='S'>S</option>
            <option value='MD'>MD</option>
            <option value='L'>L</option>
            <option value='XL'>XL</option>
            <option value='2XL'>2XL</option>
          </select>

          <select
            onChange={(e) => setFilters(prev => ({ ...prev, brand: e.target.value }))}
            value={filters.brand}
            className='py-1 px-2 h-[35px] border-2 border-zinc-400 rounded-2 text-sm outline-none bg-zinc-900'
          >
            <option value=''>All Brands</option>
            {brands.map((ele, index) => (
              <option key={index} value={ele}>{ele}</option>
            ))}
          </select>

          <select
            onChange={(e) => setFilters(prev => ({ ...prev, material: e.target.value }))}
            value={filters.material}
            className='py-1 px-2 h-[35px] border-2 border-zinc-400 rounded-2 text-sm outline-none bg-zinc-900'
          >
            <option value=''>All Materials</option>
            {materials.map((ele, index) => (
              <option key={index} value={ele}>{ele}</option>
            ))}
          </select>

          <select
            onChange={(e) => setFilters(prev => ({ ...prev, color: e.target.value }))}
            value={filters.color}
            className='py-1 px-2 h-[35px] border-2 border-zinc-400 rounded-2 text-sm outline-none bg-zinc-900'
          >
            <option value=''>All Colors</option>
            {colors.map((ele, index) => (
              <option key={index} value={ele}>{ele}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className='me-5 flex flex-row lg:flex-col  items-center pt-4 justify-between gap-2 h-[80%] relative '>
        <button
          onClick={(e) => {
            e.preventDefault()
            resetFilters()
          }}
          className='text-[8px] sm:text-[12px] bg-zinc-900 border-2 border-zinc-100 hover:border-sky-600 duration-500 rounded-lg h-[25px] sm:h-[30px] w-[60px] sm:w-[100px] text-zinc-100 hover:text-zinc-800 hover:bg-zinc-100'
        >
          empty field
        </button>
 <p className='text-[8px] mb-[20px] text-emerald-400 font-bold'>
          Results ({resultFilter.length})
        </p>
        <button
          type='submit'
          onClick={apply}
          className='w-[60px] sm:w-[100px] h-[25px] sm:h-[30px] text-[8px] sm:text-[12px] bg-zinc-900 border-2 border-zinc-100 hover:border-sky-600 duration-500 rounded-lg text-sm font-bold text-zinc-100 hover:text-zinc-800 hover:bg-zinc-100'
        >
          
          Apply Filters
        </button>

       
      </div>
    </form>
  )
}

export default FilterForm

