# Nodejs/Expressjs Store API

## Routes
 This API contains two api routes:

 - {{URL}}/products/static - Route used to test filters
 - {{URL}}/products - Route with dynamic filters

## Filters in the products route include:
|                |Example						|Description								|
|----------------|------------------------------|-------------------------------------------|
|featured        |`false`          				|Boolean value            					|
|company         |`ikea`            			|Filter by company name         			|
|name            |`leather sofa`				|Filter by name								|
|sort			|`price`						|Sort by field								|
|fields			|`name, price`					|Only return specific fields				|
|page			|`1`							|Pagination									|
|limit			|`30`							|Limit number of records returned			|
|numericFilters	|`price>40,rating>=4`			|Advance sort by fields, price and rating	|

Example use:
`{{URL}}/products?name=a`
`{{URL}}/products?page=1`
`{{URL}}/products?featured=false&company=ikea&sort=price`
`{{URL}}/products?numericFilters=price>40,rating>=4`