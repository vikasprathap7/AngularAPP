package com.main.repositories;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.main.resource.Orders;

public interface OrdersRepository extends MongoRepository<Orders, String> {

	List<Orders> findByCustomerdetailsId(ObjectId objectId);

	
}
