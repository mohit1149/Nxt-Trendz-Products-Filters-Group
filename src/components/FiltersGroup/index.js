import {IoSearchOutline} from 'react-icons/io5'
import './index.css'

const FiltersGroup = props => {
  const {updatedSearchInput, activeProductId, onClickClearFilterButton} = props
  const onChangeSearchInput = event => {
    updatedSearchInput(event.target.value)
  }

  const onClickClearFilter = () => {
    onClickClearFilterButton()
  }

  const onEnterSearchInput = event => {
    const {onEnterSearchInputs} = props
    if (event.key === 'Enter') {
      onEnterSearchInputs()
    }
  }

  const searchInputFunction = () => (
    <>
      <input
        value={activeProductId}
        type="search"
        className="search-input"
        placeholder="Search"
        onChange={onChangeSearchInput}
        onKeyDown={onEnterSearchInput}
      />
      {/* Replace this element with your code */}
      <IoSearchOutline className="search-icon" />
    </>
  )

  const selectCategoryFunction = () => {
    const {categoryOptions} = props

    return categoryOptions.map(eachCategory => {
      const {updateCategoryId} = props
      const onClickCategory = () => updateCategoryId(eachCategory.categoryId)

      return (
        <li
          className="category-list-item"
          onClick={onClickCategory}
          key={eachCategory.categoryId}
        >
          <p className="category-list-item">{eachCategory.name}</p>
        </li>
      )
    })
  }

  const selectRatingFunction = () => {
    const {ratingsList} = props

    return ratingsList.map(eachRating => {
      const {updateRatingId} = props
      const onClickRating = () => updateRatingId(eachRating.ratingId)

      return (
        <li
          className="category-list-item"
          onClick={onClickRating}
          key={eachRating.ratingId}
        >
          <div className="rating-img-paragraph-container">
            <img
              className="each-rating-image"
              src={eachRating.imageUrl}
              alt={`rating ${eachRating.ratingId}`}
            />
            <p className="rating-list-item"> & up</p>
          </div>
        </li>
      )
    })
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">{searchInputFunction()}</div>
      <div className="category-container">
        <h1 className="category-heading">Category</h1>
        <ul className="category-unorderList">{selectCategoryFunction()}</ul>
      </div>
      <div className="rating-containers">
        <h1 className="category-heading">Rating</h1>
        <ul className="category-unorderList">{selectRatingFunction()}</ul>
      </div>
      <div className="all-clear-button-container">
        <button
          className="all-clear-button"
          type="button"
          onClick={onClickClearFilter}
        >
          Clear Filters
        </button>
      </div>
    </div>
  )
}
export default FiltersGroup
