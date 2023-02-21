/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      images
      options
      userSub
      avgRating
      ratings
      availableNumber
      price
      oldPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      images
      options
      userSub
      avgRating
      ratings
      availableNumber
      price
      oldPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      images
      options
      userSub
      avgRating
      ratings
      availableNumber
      price
      oldPrice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCartProduct = /* GraphQL */ `
  mutation CreateCartProduct(
    $input: CreateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    createCartProduct(input: $input, condition: $condition) {
      id
      quantity
      option
      userSub
      product {
        id
        title
        description
        image
        images
        options
        userSub
        avgRating
        ratings
        availableNumber
        price
        oldPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartProductProductId
    }
  }
`;
export const updateCartProduct = /* GraphQL */ `
  mutation UpdateCartProduct(
    $input: UpdateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    updateCartProduct(input: $input, condition: $condition) {
      id
      quantity
      option
      userSub
      product {
        id
        title
        description
        image
        images
        options
        userSub
        avgRating
        ratings
        availableNumber
        price
        oldPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartProductProductId
    }
  }
`;
export const deleteCartProduct = /* GraphQL */ `
  mutation DeleteCartProduct(
    $input: DeleteCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    deleteCartProduct(input: $input, condition: $condition) {
      id
      quantity
      option
      userSub
      product {
        id
        title
        description
        image
        images
        options
        userSub
        avgRating
        ratings
        availableNumber
        price
        oldPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartProductProductId
    }
  }
`;
export const createOrderProduct = /* GraphQL */ `
  mutation CreateOrderProduct(
    $input: CreateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    createOrderProduct(input: $input, condition: $condition) {
      id
      quantity
      option
      product {
        id
        title
        description
        image
        images
        options
        userSub
        avgRating
        ratings
        availableNumber
        price
        oldPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      order {
        id
        userSub
        orderProduct {
          nextToken
          startedAt
        }
        fullname
        phoneNumber
        country
        city
        address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderOrderProductId
      orderProductProductId
    }
  }
`;
export const updateOrderProduct = /* GraphQL */ `
  mutation UpdateOrderProduct(
    $input: UpdateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    updateOrderProduct(input: $input, condition: $condition) {
      id
      quantity
      option
      product {
        id
        title
        description
        image
        images
        options
        userSub
        avgRating
        ratings
        availableNumber
        price
        oldPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      order {
        id
        userSub
        orderProduct {
          nextToken
          startedAt
        }
        fullname
        phoneNumber
        country
        city
        address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderOrderProductId
      orderProductProductId
    }
  }
`;
export const deleteOrderProduct = /* GraphQL */ `
  mutation DeleteOrderProduct(
    $input: DeleteOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    deleteOrderProduct(input: $input, condition: $condition) {
      id
      quantity
      option
      product {
        id
        title
        description
        image
        images
        options
        userSub
        avgRating
        ratings
        availableNumber
        price
        oldPrice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      order {
        id
        userSub
        orderProduct {
          nextToken
          startedAt
        }
        fullname
        phoneNumber
        country
        city
        address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderOrderProductId
      orderProductProductId
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      userSub
      orderProduct {
        items {
          id
          quantity
          option
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderOrderProductId
          orderProductProductId
        }
        nextToken
        startedAt
      }
      fullname
      phoneNumber
      country
      city
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      userSub
      orderProduct {
        items {
          id
          quantity
          option
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderOrderProductId
          orderProductProductId
        }
        nextToken
        startedAt
      }
      fullname
      phoneNumber
      country
      city
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      userSub
      orderProduct {
        items {
          id
          quantity
          option
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderOrderProductId
          orderProductProductId
        }
        nextToken
        startedAt
      }
      fullname
      phoneNumber
      country
      city
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
