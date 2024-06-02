import React from 'react';
import TextInput from '../toolbox/TextInput'
import SelectInput from '../toolbox/SelectInput';


const ProductDetail = (
    { 
        categories,
        product,
        onSave, 
        onChange
    }
) => {
    return (

        <form onSubmit={onSave}>
            <h2>{product.productId > 0 ? "Güncelle" : 'Ekle'}</h2>
            <TextInput name="productName"
                label="Product Name"
                value={product.productName}
                onChange={onChange}
                error="Hata">

            </TextInput>


            <TextInput name="quantityPerUnit"
                label="quantityPerUnit"
                value={product.quantityPerUnit}
                onChange={onChange}
                error="Hata">
            </TextInput>



            <TextInput name="unitPrice"
                label="Unit Price"
                value={product.unitPrice}
                onChange={onChange}
                error="Hata">
            </TextInput>


            
            <TextInput name="unitsInStock"
                label="Units In Stocks"
                value={product.unitsInStock}
                onChange={onChange}
                error="Hata">
            </TextInput>
        
            <SelectInput
                name="categoryId"
                label="Kategori"
                value={product.categoryId || '1'}
                defaultOption="Seçiniz."
                options={categories.map(category => ({
                    value: category.id,
                    text: category.categoryName
                }))}
                onChange={onChange}
                error="Hata"

            />

            <button type='submit' className='btn btn-success'>Save</button>
        </form>
    )
}

export default ProductDetail;