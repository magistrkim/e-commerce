'use client'

import React from 'react'

import classes from './index.module.scss'
import { useFilter } from '../../../_providers/Filter'
import { Category } from '../../../../payload/payload-types'
import { Checkbox } from '../../../_components/Checkbox'
import { HR } from '../../../_components/HR'
import { Radiobutton } from '../../../_components/Radiobutton'

const Filters = ({ categories }: { categories: Category[] }) => {
  const { categoryFilters, setCategoryFilters, sort, setSort } = useFilter()

  const handleCategories = (categoryId: string) => {}
  const handleSort = () => {}
  return (
    <div className={classes.filters}>
      <div>
        <h6 className={classes.title}>Product Categories</h6>
        <div className={classes.categories}>
          {categories.map(category => {
            const isSelected = categoryFilters.includes(category.id)
            return (
              <Checkbox
                key={category.id}
                label={category.title}
                value={category.id}
                isSelected={isSelected}
                onClickHandler={handleCategories}
              />
            )
          })}
        </div>
        <HR className={classes.hr} />
        <h6 className={classes.title}>Sort By</h6>
        <div className={classes.categories}>
          <Radiobutton
            label="Latest"
            value="-createdAt"
            isSelected={sort === '-createdAt'}
            groupName="sort"
            onRadioChange={handleSort}
          />
          <Radiobutton
            label="Oldest"
            value="createdAt"
            isSelected={sort === 'createdAt'}
            groupName="sort"
            onRadioChange={handleSort}
          />
        </div>
      </div>
    </div>
  )
}

export default Filters
