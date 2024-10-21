
enum PipelineStatus {
    Hot = 'Hot',
    Active = 'Active',
    Passed = 'Passed',
    Cold = 'Cold',
    Closed = 'Closed',    
}
   
export interface Target {
    id: number;
    name: string;
    description: string;
    pipelineStatus: PipelineStatus;
    markets: string[];
    lastUpdated: string;
}

export interface TargetsTableProps {
    targets: Target[];
}

