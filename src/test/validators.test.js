import { isCategoriesValid, isNameValid ,isDateValid } from '../components/Products/Update/validators'



describe("validators", ()=> {
    const date = new Date();
    
  test('test incorrect date', ()=> {
    const value = isDateValid(date.setDate(date.getDate() + 7))
    const vauleLast = isDateValid(date.setDate(date.getDate() -2))
    expect(value).toBe(false)
    expect(vauleLast).toBe(false)
  })

  test('test correct date', ()=> {
    const value = isDateValid(date.setDate(date.getDate() + 30))
    expect(value).toBe(true)
  })
  test('test incorrect name', ()=> {
    const value = isNameValid("")
    expect(value).toBe(false)
  })

  test('test correct name', ()=> {
    const value = isNameValid("test")
    expect(value).toBe(true)
  })

  
  test('test incorrect categorie', ()=> {
    const firstValue = isCategoriesValid([])
    const secondValue = isCategoriesValid([2,3,5,2,5,9])
    expect(firstValue).toBe(false)
    expect(secondValue).toBe(false)
  })

  test('test correct categorie', ()=> {
    const value = isCategoriesValid([2,3,2,5,9])
    expect(value).toBe(true)
  })
})