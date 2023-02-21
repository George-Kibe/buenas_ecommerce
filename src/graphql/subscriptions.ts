/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateCartProduct = /* GraphQL */ `
  subscription OnCreateCartProduct(
    $filter: ModelSubscriptionCartProductFilterInput
  ) {
    onCreateCartProduct(filter: $filter) {
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
export const onUpdateCartProduct = /* GraphQL */ `
  subscription OnUpdateCartProduct(
    $filter: ModelSubscriptionCartProductFilterInput
  ) {
    onUpdateCartProduct(filter: $filter) {
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
export const onDeleteCartProduct = /* GraphQL */ `
  subscription OnDeleteCartProduct(
    $filter: ModelSubscriptionCartProductFilterInput
  ) {
    onDeleteCartProduct(filter: $filter) {
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
export const onCreateOrderProduct = /* GraphQL */ `
  subscription OnCreateOrderProduct(
    $filter: ModelSubscriptionOrderProductFilterInput
  ) {
    onCreateOrderProduct(filter: $filter) {
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
export const onUpdateOrderProduct = /* GraphQL */ `
  subscription OnUpdateOrderProduct(
    $filter: ModelSubscriptionOrderProductFilterInput
  ) {
    onUpdateOrderProduct(filter: $filter) {
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
export const onDeleteOrderProduct = /* GraphQL */ `
  subscription OnDeleteOrderProduct(
    $filter: ModelSubscriptionOrderProductFilterInput
  ) {
    onDeleteOrderProduct(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
