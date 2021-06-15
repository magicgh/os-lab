# Non-contiguous Memory Allocation

## Segmentation

### Segmented Address Space

进程的段地址空间由多个段组成：主代码段、子模块代码段、公用库代码段、堆栈段（stack）、堆数据（heap）、初始化数据段和符号表等。  
段式存储管理的目的在于**更细粒度和灵活的分离与共享**。  

### Access Mechanisms
