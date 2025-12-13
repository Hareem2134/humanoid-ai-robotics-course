---
title: Bridging Python Agents to ROS controllers using rclpy
---

`rclpy` is the Python client library for ROS 2. It provides a Pythonic interface to the ROS 2 ecosystem, allowing you to create nodes, publishers, subscribers, and more.

## Key `rclpy` concepts

### Initialization and Shutdown

Before you can use `rclpy`, you need to initialize it with `rclpy.init()`. This sets up the ROS 2 communication system. When you are finished with your ROS 2 application, you should shut down `rclpy` with `rclpy.shutdown()`.

### Spinning

ROS 2 is an event-driven system. To process events such as incoming messages and service requests, you need to "spin" the `rclpy` event loop. This can be done with `rclpy.spin()`, which will block until the node is shut down, or with `rclpy.spin_once()`, which will process a single batch of events.

## Creating a Publisher

As we saw in the previous section, creating a publisher is done with the `create_publisher()` method of a `Node` object. This method takes the message type, the topic name, and the queue size as arguments.

```python
self.publisher_ = self.create_publisher(String, 'topic', 10)
```

## Creating a Subscriber

Similarly, creating a subscriber is done with the `create_subscription()` method. This method takes the message type, the topic name, the callback function, and the queue size as arguments.

```python
self.subscription = self.create_subscription(
    String,
    'topic',
    self.listener_callback,
    10)
```

## Creating a Service Client

To call a service, you need to create a service client with the `create_client()` method. This method takes the service type and the service name as arguments.

```python
self.client = self.create_client(MyService, 'my_service')
```

## Creating an Action Client

To send a goal to an action server, you need to create an action client with the `create_action_client()` method. This method takes the action type and the action name as arguments.

```python
self.action_client = self.create_action_client(MyAction, 'my_action')
```

In the next section, we will learn how to describe a robot's physical structure using the Unified Robot Description Format (URDF).
