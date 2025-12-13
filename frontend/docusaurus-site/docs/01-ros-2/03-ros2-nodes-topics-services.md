---
title: ROS 2 Nodes, Topics, and Services
---

In this section, we will dive into the practical aspects of working with ROS 2 nodes, topics, and services. We will learn how to create and run ROS 2 nodes, and how to use topics and services for communication.

## Creating a ROS 2 Node

A ROS 2 node is a Python class that inherits from `rclpy.node.Node`. Here is a simple example of a ROS 2 node:

```python
import rclpy
from rclpy.node import Node

class MyNode(Node):
    def __init__(self):
        super().__init__('my_node')
        self.get_logger().info('Hello from my_node!')

def main(args=None):
    rclpy.init(args=args)
    node = MyNode()
    rclpy.spin(node)
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Using Topics for Communication

Topics are the most common way for nodes to communicate in ROS 2. Let's create a simple publisher and subscriber to see how they work.

### Publisher

A publisher is a node that sends messages to a topic. Here is an example of a simple publisher that sends a "Hello, world!" message every second:

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class PublisherNode(Node):
    def __init__(self):
        super().__init__('publisher_node')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello, world!'
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)

# ... (main function as above)
```

### Subscriber

A subscriber is a node that receives messages from a topic. Here is an example of a simple subscriber that listens to the `topic` and prints the received messages:

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class SubscriberNode(Node):
    def __init__(self):
        super().__init__('subscriber_node')
        self.subscription = self.create_subscription(
            String,
            'topic',
            self.listener_callback,
            10)

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)

# ... (main function as above)
```

## Using Services for Communication

Services are used for request-response communication. We will cover services in more detail in a later section.
