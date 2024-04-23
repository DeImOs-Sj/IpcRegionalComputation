# InterPlanetary Storage Exchange (IPSE)

## Project Overview

**Project Name**: InterPlanetary Storage Exchange (IPSE)

**Project Description**: IPSE is a decentralized storage marketplace that enables users to list their storage resources and allows others to purchase these resources. It addresses the challenges of high on-chain data storage costs, lack of rewards for data owners, GDPR compliance, and scalability issues by offering a scalable, cost-effective, and compliant platform.

## Why IPSE?

- **Innovative Solution**: IPSE leverages blockchain technology to create a global marketplace for storage resources, making it possible to store data on-chain without the traditional high costs.
- **Incentivized Data Owners**: By rewarding data owners for their contributions, IPSE encourages a more active and engaged community in the decentralized storage ecosystem.
- **GDPR Compliance**: IPSE's regional subnets ensure compliance with GDPR regulations, providing a secure and privacy-preserving environment for users.

## Architecture
<img src="https://github.com/DeImOs-Sj/IpcRegionalComputation/blob/main/images/architecture.jpeg"><br>
IPSE's architecture is built upon the InterPlanetary Consensus (IPC) framework, a revolutionary technology that powers planetary-scale decentralized applications (dApps) through horizontal scalability. IPC enables on-demand horizontal scalability through "subnets," allowing for the running of different consensus algorithms fine-tuned explicitly to dApps requirements. This architecture is monumental as it achieves mass scaling by running parallel chains that can interoperate with one another, addressing the much-needed scalability in the Web3 world [3].

The architecture of IPSE starts with the main L1 rootnet, such as Filecoin, and expands into two subnets: a Regional Subnet and a Database Subnet.

- **Regional Subnet**: This subnet is organized into regions like Europe, Asia, and the USA, with further divisions into cities like Mumbai, Singapore, and Shanghai. Shanghai, for example, can directly access DB1 from the Database Subnet.
- **Database Subnet**: Within this subnet, there are infinite L2+ child subnets that can be swapped out as needed, allowing for dynamic and flexible data storage and access.

Both the Regional and Database Subnets are managed by smart contracts, facilitating a secure and efficient process. Actors within these subnets handle the operations, ensuring that data is stored, accessed, and managed according to the project's standards and regulations.

IPC's architecture unlocks a new era of web3 scaling and flexibility, with recursively scalable subnets, sub-second transactions, robust compute workloads, and highly adaptable WebAssembly runtimes tailored to developer requirements. This allows for the creation of flexible, dynamic networks of customizable sidechains or "subnets," which can achieve massive scaling by running parallel chains that interoperate with one another.

IPSE leverages IPC's capabilities to bring compute onto the Filecoin network, enabling the creation of a decentralized storage marketplace that not only addresses the challenges of high on-chain data storage costs, lack of rewards for data owners, and GDPR compliance but also ensures scalability and efficiency, making it a pivotal innovation in the storage ecosystem [4].
<img src="https://github.com/DeImOs-Sj/IpcRegionalComputation/blob/main/images/terminal2.jpeg"><br>
<img src="https://github.com/DeImOs-Sj/IpcRegionalComputation/blob/main/images/terminal1.jpeg"><br>
<img src="https://github.com/DeImOs-Sj/IpcRegionalComputation/blob/main/images/terminal4.jpeg"><br>

