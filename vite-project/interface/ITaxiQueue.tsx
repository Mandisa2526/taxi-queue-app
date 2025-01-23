export interface ITaxiQueue {
    joinQueue(): string | null;
    leaveQueue(): string | null;
    joinTaxiQueue(): string | null;
    taxiDepart(): string | null;
    queueLength(): number;
    taxiQueueLength(): number;
}
  