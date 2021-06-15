# Memory Management

In a uniprogramming system, main memory is divided into two parts: one part
for the operating system (resident monitor, kernel) and other part for the program
currently being executed. In a multiprogramming system, the “user” part of
memory must be further subdivided to accommodate multiple processes. The task
of subdivision is carried out dynamically by the operating system and is known as
memory management.  

Effective memory management is vital in a multiprogramming system. If only
a few processes are in memory, then for much of the time all of the processes will be
waiting for I/O (input/output), and the processor will be idle. Thus, memory needs to
be allocated to ensure a reasonable supply of ready processes to consume available
processor time.  

In this chapter, some key concepts about **contiguous memory allocation** and **non-contiguous memory allocation** will be discussed.  
