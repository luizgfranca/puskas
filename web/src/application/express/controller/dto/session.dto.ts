import type { Session } from "express-session";
import type { Session as SessionData } from "../../../../module/session/session.model";

export interface SessionDto extends SessionData, Session {}

export function printSession(session: SessionDto) {
    const { id, cart, location } = session;
    console.log('session', { id, cart, location })
}