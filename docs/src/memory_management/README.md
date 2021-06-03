# Memory Management

## The Memory Hierarchy

A typical hierarchy is illustrated in figure below.

![The Memory Hierarchy](./assets/the_memory_hierarchy.png)

As one goes down the hierarchy, the following occur:

* Decreasing cost per bit
* Increasing capacity
* Increasing access time
* Decreasing frequency of access to the memory by the processor

## Cache Memory

Although cache memory is invisible to the OS, it interacts with other memory management hardware.

## Cache Principles

Cache memory is intended to provide memory access time approaching that of the fastest memories available, and at the same time support a large memory size that has the price of less expensive types of semiconductor memories. The concept is illustrated in the Figure below

![Single Cache](./assets/single_cache.png)

There is a relatively large and slow main memory together with a smaller, faster cache memory.

The next Figure depicts the use of multiple levels of cache.

![Three-level Cache Organization](./assets/three-level_cache_organization.png)

Main memory consists of up to $2^n$ addressable words, with each word having a unique $n$-bit address. For mapping purposes, this memory is considered to consist of a number of fixed length **blocks**
of K words each. That is there are $M=2^n/K$ blocks. Cache consists of C **slots** (*lines*) of K words each, and the number of slots is considerably less than the number of main memory blocks ($C << M$).

![Cache/Main Memory Structure](./assets/cache_main_memory_structure.png)

## Memory Management Methods

* Relocation
* Segmentatio   n
* Paging
* Virtual Memory

## Address Space

The range of addresses available to a computer program.

* A logical address is a reference to a memory location **independent** of the current assignment of data to memory; a translation must be made to a physical address before the memory access can be achieved.

* A relative address is a particular
example of logical address, in which the address is expressed as a location relative to some known point, usually a value in a processor register.

* A physical address, or absolute address is an **actual** location in main memory.

### Generating Logical Address

* Compile
* Assemble
* Link
* Relocation

### Procedures

* CPU
  * ALU: 需要逻辑地址的内存内容
  * MMU：进行逻辑地址和物理地址的转换
  * CPU 控制逻辑：给总线发送物理地址请求
* 内存： 发送物理地址的内容给 CPU 或接受 CPU 数据到物理地址
* 操作系统：建立逻辑地址与物理地址的映射

### Address Check

![Address Check](./assets/address_check.png)

## Memory Partitioning

The principal operation of memory management is to bring processes into main memory for execution by the processor.

### Fixed Partitioning

In most schemes for memory management, we can assume the OS occupies some fixed portion of main memory, and the rest of main memory is available for use by multiple processes. The simplest scheme for managing this available memory is to partition it into regions with fixed boundaries.

#### Description

Main memory is divided into a number of static partitions *at system generation time*. A process may be loaded into a partition of *equal or greater size*.

#### Strengths

Simple to implement; little operating system overhead.

#### Weaknesses

Inefficient use of memory due to internal fragmentation; maximum number of active processes is fixed.

![Example of Fixed Partitioning](./assets/example_of_fixed_partitioning.png)

With unequal-size partitions, there are two possible ways to assign processes to partitions. The simplest way is to assign each process to the smallest partition within which it will fit. In this case, a scheduling queue is needed for each partition to hold swapped-out processes destined for that partition

### Internal Fragmentation

Occurs when memory is divided into fixed-size partitions (e.g., page frames in main memory, physical blocks on disk). If a block of data is assigned to one or more partitions, then there may be wasted space in the last partition. This will occur if the last portion of data is smaller than the last partition.

### External Fragmentation

Occurs when memory is divided into variable-size partitions corresponding to the blocks of data assigned to the memory (e.g., segments in main memory). As segments are moved into and out of the memory, gaps will occur between the occupied portions of memory.

### Dynamic Partitioning

#### Description

Partitions are created dynamically, so each process is loaded into a partition of exactly the same size as that process.

#### Strengths

No internal fragmentation; more efficient use of main memory.

#### Weaknesses

Inefficient use of processor due to the need for compaction to counter external fragmentation.

#### Placement Algorithms

Three placement algorithms that might be considered are **best-fit, first-fit, and next-fit**. All, of course, are limited to choosing among free blocks of main memory that are equal to or larger than the process to be brought in. **Best-fit** chooses the block that is closest in size to the request. **First-fit** begins to scan memory from the beginning and chooses the first available block that is large enough. **Next-fit** begins to scan memory from the location of the last placement and chooses the next available block that is large enough.

* Best-fit:
* First-fit:
* Next-fit:
