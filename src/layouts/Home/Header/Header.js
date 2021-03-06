import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserAccountMenu from '../../../components/UserAccountMenu';
import { authGuard } from '../../../utils';

const LinkMaterial = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
));

const sections = [
    'Technology',
    'Design',
    'Culture',
    'Business',
    'Politics',
    'Opinion',
    'Science',
    'Health',
    'Style',
    'Travel',
];

const Header = props => {
    const { classes } = props;
    return (
        <>
            <Toolbar className={classes.toolbar}>
                <Button
                    variant="outlined"
                    size="small"
                    component={LinkMaterial}
                    to="/"
                >
                    React-Ready
                </Button>

                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                ></Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                {authGuard.isAuthenticated() ? (
                    <>
                        <Button
                            variant="outlined"
                            size="small"
                            component={LinkMaterial}
                            to="/dashboard"
                        >
                            Dashbaord
                        </Button>
                        <UserAccountMenu {...props} />
                    </>
                ) : (
                    <Button
                        variant="outlined"
                        size="small"
                        component={LinkMaterial}
                        to="/login"
                    >
                        Log in
                    </Button>
                )}
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                className={classes.toolbarSecondary}
            >
                {sections.map(section => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section}
                        variant="body2"
                        href="#"
                        className={classes.toolbarLink}
                    >
                        {section}
                    </Link>
                ))}
            </Toolbar>
        </>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Header;
