import React from "react";
import { Badge } from "reactstrap";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import IStyledComponentProps from "../../../typescript/interfaces/shared/styled-components/IStyled-React-Component";

/**
 * @interface IProps => Component's props interface.
 */
interface IProps extends IStyledComponentProps {
    starCount: number;
}

/**
 * @function GithubRepositoryStarsBadge => Star-rating statistics for particular Github repository.
 * @param className => classname that is generated by Styled components library.
 */
const GithubRepositoryStarsBadge: React.FC<IProps> = ({className, starCount}) => {

    if (starCount < 0) {
        return null;
    }

    return (
        <div>
            <Badge className={className} color="secondary">{starCount}<FontAwesomeIcon icon={faStar} /></Badge>
        </div>
    )
}

export default styled(GithubRepositoryStarsBadge)`
`   