export interface EmployeeRequest {  //查询请求的数据格式
    name: string;
    departmentId: number | undefined;
}

interface EmployeeInfo { //请求的响应
    id: number;
    key: number;
    name: string;
    department: string;
    hiredate: string;
    level: string;
}

export type EmployeeResponse = EmployeeInfo[] | undefined  //后端的响应 是以EmployeeInfo类型的数组或者是undefined

// 有利于项目的维护
