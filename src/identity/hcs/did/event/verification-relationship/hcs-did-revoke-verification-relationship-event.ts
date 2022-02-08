import { HcsDidEvent } from "../hcs-did-event";
import { HcsDidEventName } from "../hcs-did-event-name";

export class HcsDidRevokeVerificationRelationshipEvent extends HcsDidEvent {
    public readonly name = HcsDidEventName.VERIFICATION_RELATIONSHIP;

    protected id: string;

    constructor(id: string) {
        super();

        this.id = id;
    }

    public getId() {
        return this.id;
    }

    public toJsonTree() {
        return {
            [this.name]: {
                id: this.getId(),
            },
        };
    }

    public toJSON() {
        return JSON.stringify(this.toJsonTree());
    }

    static fromJsonTree(tree: any): HcsDidRevokeVerificationRelationshipEvent {
        return new HcsDidRevokeVerificationRelationshipEvent(tree.id);
    }
}
